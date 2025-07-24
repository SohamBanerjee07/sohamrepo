package com.gym.fitness.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.gym.fitness.models.schedule;

@Repository
public interface ischedulerepo extends JpaRepository<schedule, Integer> {
    schedule findByTitle(String title);
}
