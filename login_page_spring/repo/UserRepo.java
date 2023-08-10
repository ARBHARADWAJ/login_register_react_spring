package com.security.security.repo;


import com.security.security.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepo extends CrudRepository<User,Long> {

 boolean existsByEmail(String email);
 User findByEmail(String email);
 User findByEmailAndPassword(String email, String password);
}
