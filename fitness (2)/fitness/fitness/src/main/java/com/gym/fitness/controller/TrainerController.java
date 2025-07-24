package com.gym.fitness.controller;


import com.gym.fitness.models.trainer;
import com.gym.fitness.service.ITrainerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/trainers")
public class TrainerController {

    @Autowired
    private ITrainerService trainerService;

    @PostMapping
    public trainer create(@RequestBody trainer Trainer) {
        return trainerService.createTrainer(Trainer);
    }

    @GetMapping("/{id}")
    public trainer get(@PathVariable int id) {
        return trainerService.getTrainerById(id);
    }

    @GetMapping
    public List<trainer> getAll() {
        return trainerService.getAllTrainers();
    }

    @PutMapping
    public trainer update(@RequestBody trainer Trainer) {
        return trainerService.updateTrainer(Trainer);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        trainerService.deleteTrainer(id);
    }
}
