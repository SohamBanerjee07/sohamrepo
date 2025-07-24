package com.gym.fitness.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.gym.fitness.models.user;

@Repository
public interface iuserrepo extends JpaRepository<user, Integer> {
	public user findByEmail(String email);  
}

