package com.choufli7al;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.choufli7al.repository")
public class Choufli7alApplication {

	public static void main(String[] args) {
		SpringApplication.run(Choufli7alApplication.class, args);
	}

}
