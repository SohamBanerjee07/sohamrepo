package com.gym.fitness.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.gym.fitness.models.membership;

@Repository
public interface imembershiprepo extends JpaRepository<membership, Integer> {
    membership findByMemberId(int memberId);
}
