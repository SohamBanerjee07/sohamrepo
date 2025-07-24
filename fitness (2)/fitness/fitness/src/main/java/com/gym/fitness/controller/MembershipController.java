package com.gym.fitness.controller;


import com.gym.fitness.models.membership;
import com.gym.fitness.service.IMembershipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/enrollments")
public class MembershipController {

    @Autowired
    private IMembershipService MembershipService;

    @PostMapping
    public membership create(@RequestBody membership Membership) {
        return MembershipService.createEnrollment(Membership);
    }

    @GetMapping("/{id}")
    public membership get(@PathVariable int id) {
        return MembershipService.getEnrollmentById(id);
    }

    @GetMapping
    public List<membership> getAll() {
        return MembershipService.getAllEnrollments();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        MembershipService.deleteEnrollment(id);
    }
}
