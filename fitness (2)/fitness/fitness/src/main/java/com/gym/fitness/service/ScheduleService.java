package com.gym.fitness.service;


import com.gym.fitness.models.schedule;
import com.gym.fitness.repositories.ischedulerepo;
import com.gym.fitness.service.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ScheduleService implements IScheduleService {

    @Autowired
    private ischedulerepo scheduleRepo;

    @Override
    public schedule createClass(schedule Schedule) {
        return scheduleRepo.save(Schedule);
    }

    @Override
    public schedule getClassById(int id) {
        Optional<schedule> optional = scheduleRepo.findById(id);
        return optional.orElse(null);
    }

    @Override
    public List<schedule> getAllClasses() {
        return scheduleRepo.findAll();
    }

    @Override
    public schedule updateClass(schedule Schedule) {
        return scheduleRepo.save(Schedule);
    }

    @Override
    public void deleteClass(int id) {
    	scheduleRepo.deleteById(id);
    }
}

