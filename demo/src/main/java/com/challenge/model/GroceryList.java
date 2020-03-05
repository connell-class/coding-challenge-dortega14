package com.challenge.model;

import java.time.LocalDate;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table
@Data
@NoArgsConstructor
@AllArgsConstructor
public class GroceryList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private LocalDate todaysDate;

    private String description;

    @OneToMany(mappedBy = "groceryList", fetch = FetchType.EAGER)
    // @JsonIgnore
    private Set<GroceryItem> groceries;


    public GroceryList(LocalDate todaysDate, String description) {
        this.todaysDate = todaysDate;
        this.description = description;
    }


}