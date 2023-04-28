package nlu.axon_active.server.service;

import nlu.axon_active.server.dto.request.AccountRequest;
import nlu.axon_active.server.dto.response.AccountResponse;
import nlu.axon_active.server.entity.Account;
import nlu.axon_active.server.entity.AccountRole;
import nlu.axon_active.server.repo.AccountRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class AccountService implements BaseService<AccountRequest, AccountResponse>{
    @Autowired
    public AccountRepository accountRepository;
    ModelMapper mapper = new ModelMapper();;
    @Override
    public AccountResponse create(AccountRequest request, Long createBy) {
        return null;
    }

    @Override
    public AccountResponse getById(Long id) {
        Optional<Account> response = accountRepository.findById(id);
        return  mapper.map(response, AccountResponse.class);
    }
    @Override
    public void update(Long id, AccountRequest request, Long updateBy) {

    }
    @Override
    public void delete(Long id) {

    }
    public AccountResponse login(String username, String password){
        Account account = accountRepository.findAccountByUsernameAndPasswordAndActiveStatus(username,password,"ACTIVE");
        if(!ObjectUtils.isEmpty(account)){
            AccountResponse accountResponse = mapper.map(account,AccountResponse.class);
            Set<String> roles = new HashSet<>();
            account.getAccountRoles().forEach(a -> roles.add(a.getRole().getRoleName()));
            accountResponse.setRoles(roles);

            return accountResponse;
        }
        return null;
    }


}
