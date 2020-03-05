package com.challenge;

import java.time.LocalDate;

import com.challenge.dao.GroceryItemDao;
import com.challenge.model.GroceryItem;
import com.challenge.model.GroceryList;
import com.challenge.service.GroceryListService;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	// @Bean
	// CommandLineRunner runner(GroceryItemDao gld){
	// 	return args -> {
	// 		// GroceryListService gls = new GroceryListService();
	// 		// gld.save(new GroceryList(LocalDate.now(),"Running out of napkins"));
	// 		gld.save(new GroceryItem("Kitchen", 100, 7, new GroceryList(LocalDate.now(),"Running out of napkins")));
	// 	};
	// }

}
