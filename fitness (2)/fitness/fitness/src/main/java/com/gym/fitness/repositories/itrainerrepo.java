package com.gym.fitness.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.gym.fitness.models.trainer;

@Repository
public interface itrainerrepo extends JpaRepository<trainer, Integer> {
    trainer findByName(String name);
}
