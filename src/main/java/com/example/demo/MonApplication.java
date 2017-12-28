package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;

@Configuration
@ComponentScan
@EnableJpaRepositories
@EnableAutoConfiguration
@SpringBootApplication
public class MonApplication implements CommandLineRunner{
	
	@Autowired
	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(MonApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		/*userRepository.save(new User("one", "one"));
		userRepository.save(new User("two", "two"));
		userRepository.save(new User("three", "three"));*/
		
		Iterable<User> itr = userRepository.findAll();
		
		/*for(User userr : itr) {
		 System.out.println(userr.getFname());
		 System.out.println(userr.getLname());
		} */
		
		
	}
}
