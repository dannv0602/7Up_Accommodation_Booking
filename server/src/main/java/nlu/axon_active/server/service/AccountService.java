package nlu.axon_active.server.service;

import nlu.axon_active.server.dto.request.AccountRequest;
import nlu.axon_active.server.dto.response.AccountResponse;
import nlu.axon_active.server.entity.Account;
import nlu.axon_active.server.entity.AccountRole;
import nlu.axon_active.server.entity.Location;
import nlu.axon_active.server.entity.Role;
import nlu.axon_active.server.entity.composite_key.AccountRoleId;
import nlu.axon_active.server.exception.RecordAlreadyExistsException;
import nlu.axon_active.server.repo.AccountRepository;
import nlu.axon_active.server.repo.RoleRepository;
import nlu.axon_active.server.utils.DateUtils;
import nlu.axon_active.server.utils.HashPassword;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.PathVariable;

import java.nio.channels.AcceptPendingException;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class AccountService implements BaseService<AccountRequest, AccountResponse> {
    @Autowired
    public AccountRepository accountRepository;
    @Autowired
    public RoleRepository roleRepository;
    ModelMapper mapper = new ModelMapper();


    @Override
    public AccountResponse create(AccountRequest request, Long createBy) {
        return null;
    }

    @Override
    public AccountResponse getById(Long id) {
        Optional<Account> response = accountRepository.findById(id);
        return mapper.map(response, AccountResponse.class);
    }

    @Override
    public void update(Long id, AccountRequest request, Long updateBy) {

    }

    @Override
    public void delete(Long id) {

    }

    public AccountResponse login(String username, String password) {
        String passwordHash = HashPassword.encrypt(password);
        Account account = accountRepository.findAccountByUsernameAndPasswordAndActiveStatus(username, passwordHash, "ACTIVE");
        if (!ObjectUtils.isEmpty(account)) {
            AccountResponse accountResponse = mapper.map(account, AccountResponse.class);
            Set<String> roles = new HashSet<>();
            account.getAccountRoles().forEach(a -> roles.add(a.getRole().getRoleName()));
            accountResponse.setRoles(roles);

            return accountResponse;
        }
        return null;
    }

    public AccountResponse register(AccountRequest accountRequest, Long createBy) {
        Account accountCheckExist = accountRepository.findAccountByUsername(accountRequest.getUsername());
        if(accountCheckExist!=null){
            throw new RecordAlreadyExistsException("Account is exist");
        }
        Account account = mapper.map(accountRequest, Account.class);
        account.setCreateBy(createBy);
        account.setCreateDate(DateUtils.getNow());
        account.setPassword(HashPassword.encrypt(accountRequest.getPassword()));
        account.setActiveStatus("ACTIVE");
        //Set role
        Role role = roleRepository.findByRoleName("CUSTOMER");
        Set<AccountRole> accountRoles = new HashSet<>();
        //Create accountRole
        AccountRole accountRole = new AccountRole();
        AccountRoleId accountRoleId = new AccountRoleId();
        accountRoleId.setAccount(account);
        accountRoleId.setRole(role);
        accountRole.setId(accountRoleId);
        accountRole.setAccount(account);
        accountRole.setRole(role);
        accountRoles.add(accountRole);

        account.getAccountRoles().add(accountRole);

        //
        AccountResponse accountResponse = mapper.map(accountRepository.save(account), AccountResponse.class);
        return accountResponse;
    }
    public AccountResponse getByUsername(String username){
        Account account = accountRepository.findAccountByUsername(username);
        if (!ObjectUtils.isEmpty(account)) {
            AccountResponse accountResponse = mapper.map(account, AccountResponse.class);
            Set<String> roles = new HashSet<>();
            account.getAccountRoles().forEach(a -> roles.add(a.getRole().getRoleName()));
            accountResponse.setRoles(roles);
            return accountResponse;
        }
        return null;
    }

}
