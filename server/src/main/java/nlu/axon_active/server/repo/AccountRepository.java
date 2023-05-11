package nlu.axon_active.server.repo;

import nlu.axon_active.server.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
    public Account findAccountByUsernameAndPasswordAndActiveStatus(String username, String password,String activeStatus);
    public Account findAccountByUsername(String username);
    public Account findAccountById(Long id);

}
