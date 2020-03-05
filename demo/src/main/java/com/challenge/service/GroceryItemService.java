package com.challenge.service;

import com.challenge.dao.GroceryItemDao;
import com.challenge.model.GroceryItem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GroceryItemService {

    @Autowired
    GroceryItemDao gid;

    public Iterable<GroceryItem> findAll(){
        return gid.findAll();
    }

    public GroceryItem findById(int id) {
        return gid.findById(id).get();
    }

    public void insert(GroceryItem gi) {
        gid.save(gi);
    }

    public void update(GroceryItem gi) {
        gid.save(gi);
    }

    public void updateById(int id) {
        GroceryItem gi = gid.findById(id).get();
        gid.save(gi);
    }

    public void delete(GroceryItem gi) {
        gid.delete(gi);
    }

    public void deleteById(int id) {
        GroceryItem gi = gid.findById(id).get();
        gid.delete(gi);
    }

}