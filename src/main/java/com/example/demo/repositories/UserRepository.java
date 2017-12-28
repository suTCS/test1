package com.example.demo.repositories;




import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.entities.User;

@RepositoryRestResource
public interface UserRepository extends JpaRepository<User, Long>{

	List<User> findBylname(String lname);
}

