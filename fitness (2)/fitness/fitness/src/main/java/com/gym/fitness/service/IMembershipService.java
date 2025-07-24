package com.gym.fitness.service;


import com.gym.fitness.models.membership;
import java.util.List;

public interface IMembershipService {
    membership createEnrollment(membership enrollment);
    membership getEnrollmentById(int id);
    List<membership> getAllEnrollments();
    void deleteEnrollment(int id);
}
