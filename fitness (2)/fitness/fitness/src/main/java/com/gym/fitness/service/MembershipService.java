package com.gym.fitness.service;


import com.gym.fitness.models.membership;
import com.gym.fitness.repositories.imembershiprepo;
import com.gym.fitness.service.MembershipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MembershipService implements IMembershipService {

    @Autowired
    private imembershiprepo enrollmentRepository;

    @Override
    public membership createEnrollment(membership enrollment) {
        return enrollmentRepository.save(enrollment);
    }

    @Override
    public membership getEnrollmentById(int id) {
        Optional<membership> optional = enrollmentRepository.findById(id);
        return optional.orElse(null);
    }

    @Override
    public List<membership> getAllEnrollments() {
        return enrollmentRepository.findAll();
    }

    @Override
    public void deleteEnrollment(int id) {
        enrollmentRepository.deleteById(id);
    }
}
