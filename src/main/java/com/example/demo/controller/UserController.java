package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;

@CrossOrigin(origins="http://localhost:4200", allowedHeaders="*", maxAge = 3600)
@RestController
@RequestMapping(value="/api")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/users")
	public List<User> getUsers(){
		return userRepository.findAll();
	}
	
	@GetMapping("/users/{id}")
	public User getUser(@PathVariable("id") Long id){
		return userRepository.findOne(id);
	}
	
	@DeleteMapping("/user/{id}")
	public boolean deleteUser(@PathVariable Long id){
		 userRepository.delete(id);
		 return true;
	}
	
	@PostMapping("/user")
	public User createUser(@RequestBody User user){
		
		return userRepository.save(user);
		  
	}
	
	@PutMapping("/user")
	public User updateUser(@RequestBody User user){
		return userRepository.save(user);
}
	
	@GetMapping("/users/{lname}")
	public List<User> findByLastName(@PathVariable String lname) {
		List<User> searchResult = userRepository.findBylname(lname);
		System.out.println("hi" + searchResult);
		return searchResult;
	}

}
