package com.gym.fitness.models;


import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "trainers")
public class trainer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    private String name;
    private String specialization;

    @OneToMany(mappedBy = "trainer", cascade = CascadeType.ALL)
    private List<schedule> classes;

    // Getters and Setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public List<schedule> getClasses() {
        return classes;
    }

    public void setClasses(List<schedule> classes) {
        this.classes = classes;
    }
}

