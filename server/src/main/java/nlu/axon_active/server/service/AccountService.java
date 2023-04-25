package nlu.axon_active.server.service;

import nlu.axon_active.server.dto.request.AccountRequest;
import nlu.axon_active.server.dto.response.AccountResponse;
import nlu.axon_active.server.entity.Account;
import nlu.axon_active.server.repo.AccountRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountService implements BaseService<AccountRequest, AccountResponse>{
    @Autowired
    public AccountRepository accountRepository;
    ModelMapper mapper = new ModelMapper();;
    @Override
    public AccountResponse createRoom(AccountRequest request, Long createBy) {
        return null;
    }

    @Override
    public AccountResponse getById(Long id) {
        Optional<Account> response = accountRepository.findById(id);
        return  mapper.map(response, AccountResponse.class);
    }

    @Override
    public void updateRoom(Long id, AccountRequest request) {

    }
}
