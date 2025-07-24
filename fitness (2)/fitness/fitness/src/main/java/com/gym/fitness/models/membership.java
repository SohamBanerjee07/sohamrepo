package com.gym.fitness.models;


import jakarta.persistence.*;

@Entity
@Table(name = "membership")
public class membership {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private user member;

    @ManyToOne
    @JoinColumn(name = "class_id")
    private schedule gymClass;

    // Getters and Setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public user getMember() {
        return member;
    }

    public void setMember(user member) {
        this.member = member;
    }

    public schedule getGymClass() {
        return gymClass;
    }

    public void setGymClass(schedule gymClass) {
        this.gymClass = gymClass;
    }
}
