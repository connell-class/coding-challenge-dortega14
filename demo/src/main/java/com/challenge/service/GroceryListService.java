package com.challenge.service;

import com.challenge.dao.GroceryListDao;
import com.challenge.model.GroceryList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GroceryListService {

    @Autowired
    GroceryListDao gld;

    public Iterable<GroceryList> findAll(){
        return gld.findAll();
    }

    public GroceryList findById(int id) {
        return gld.findById(id).get();
    }

    public void insert(GroceryList gi) {
        gld.save(gi);
    }

    public void update(GroceryList gi) {
        gld.save(gi);
    }

    public void updateById(int id) {
        GroceryList gi = gld.findById(id).get();
        gld.save(gi);
    }

    public void delete(GroceryList gi) {
        gld.delete(gi);
    }

    public void deleteById(int id) {
        GroceryList gi = gld.findById(id).get();
        gld.delete(gi);
    }

}