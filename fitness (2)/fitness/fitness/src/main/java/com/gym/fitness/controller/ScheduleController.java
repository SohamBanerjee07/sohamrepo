package com.gym.fitness.controller;


import com.gym.fitness.models.schedule;
import com.gym.fitness.service.IScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/classes")
public class ScheduleController {

    @Autowired
    private IScheduleService scheduleService;

    @PostMapping
    public schedule create(@RequestBody schedule Schedule) {
        return scheduleService.createClass(Schedule);
    }

    @GetMapping("/{id}")
    public schedule get(@PathVariable int id) {
        return scheduleService.getClassById(id);
    }

    @GetMapping
    public List<schedule> getAll() {
        return scheduleService.getAllClasses();
    }

    @PutMapping
    public schedule update(@RequestBody schedule Schedule) {
        return scheduleService.updateClass(Schedule);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        scheduleService.deleteClass(id);
    }
}
