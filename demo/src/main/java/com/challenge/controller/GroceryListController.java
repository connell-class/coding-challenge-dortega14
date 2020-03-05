package com.challenge.controller;

import com.challenge.model.GroceryList;
import com.challenge.service.GroceryListService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/list")
@CrossOrigin(origins = "http://localhost:3000")
public class GroceryListController {

    @Autowired
    GroceryListService gls;

    @GetMapping("/all")
    public Iterable<GroceryList> findAllGroceryLists() {
        return gls.findAll();
    }

    @GetMapping("/{id}")
    public GroceryList findGroceryListById(@PathVariable("id") int id) {
        return gls.findById(id);
    }

    @PostMapping("/new")
    public String insertGroceryList(@RequestBody GroceryList gl) {
        gls.insert(gl);
        return "new grocery item added";
    }

    @PutMapping("/update")
    public String updateGroceryList(@RequestBody GroceryList gl) {
        gls.update(gl);
        return "grocery item updated";
    }

    @PutMapping("/updatebyid")
    public String updateGroceryListById(int id) {
        gls.updateById(id);
        return "grocery item updated by ID";
    }

    @DeleteMapping("/delete")
    public String deleteGroceryList(GroceryList gl) {
        gls.delete(gl);
        return "grocery item deleted";
    }

    @DeleteMapping("/deletebyid")
    public String deleteGroceryListById(int id) {
        gls.deleteById(id);
        return "grocery item deleted by ID";
    }

}