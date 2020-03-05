package com.challenge.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table
@Data
@NoArgsConstructor
@AllArgsConstructor
public class GroceryItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String type;

    private int quantity;

    private int expectedCost;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "grocery_list_id")
    private GroceryList groceryList;


    public GroceryItem(String type, int quantity, int expectedCost, GroceryList groceryList) {
        this.type = type;
        this.quantity = quantity;
        this.expectedCost = expectedCost;
        this.groceryList = groceryList;
    }


}