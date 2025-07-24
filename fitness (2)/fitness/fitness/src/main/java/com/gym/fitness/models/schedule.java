package com.gym.fitness.models;


import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "schedule")
public class schedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;
    private String schedule;

    @ManyToOne
    @JoinColumn(name = "trainer_id")
    private trainer trainer;

    @OneToMany(mappedBy = "gymClass", cascade = CascadeType.ALL)
    private List<membership> memberships;

    // Getters and Setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSchedule() {
        return schedule;
    }

    public void setSchedule(String schedule) {
        this.schedule = schedule;
    }

    public trainer getTrainer() {
        return trainer;
    }

    public void setTrainer(trainer trainer) {
        this.trainer = trainer;
    }

    public List<membership> getEnrollments() {
        return memberships;
    }

    public void setEnrollments(List<membership> memberships) {
        this.memberships = memberships;
    }
}
