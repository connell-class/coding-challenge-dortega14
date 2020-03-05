package com.challenge.controller;

import com.challenge.model.GroceryItem;
import com.challenge.service.GroceryItemService;

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
@RequestMapping(value = "/item")
@CrossOrigin(origins = "http://localhost:3000")
public class GroceryItemController {

    @Autowired
    GroceryItemService gis;

    @GetMapping("/all")
    public Iterable<GroceryItem> findAllGroceryItems() {
        return gis.findAll();
    }

    @GetMapping("/{id}")
    public GroceryItem findGroceryItemById(@PathVariable("id") int id) {
        return gis.findById(id);
    }

    @PostMapping("/new")
    public String insertGroceryItem(@RequestBody GroceryItem gi) {
        gis.insert(gi);
        return "new grocery item added";
    }

    @PutMapping("/update")
    public String updateGroceryItem(@RequestBody GroceryItem gi) {
        gis.update(gi);
        return "grocery item updated";
    }

    @PutMapping("/updatebyid")
    public String updateGroceryItemById(int id) {
        gis.updateById(id);
        return "grocery item updated by ID";
    }

    @DeleteMapping("/delete")
    public String deleteGroceryItem(GroceryItem gi) {
        gis.delete(gi);
        return "grocery item deleted";
    }

    @DeleteMapping("/deletebyid")
    public String deleteGroceryItemById(int id) {
        gis.deleteById(id);
        return "grocery item deleted by ID";
    }

}