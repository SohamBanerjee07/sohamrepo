package com.gym.fitness.service;


import com.gym.fitness.models.trainer;
import java.util.List;

public interface ITrainerService {
    trainer createTrainer(trainer trainer);
    trainer getTrainerById(int id);
    List<trainer> getAllTrainers();
    trainer updateTrainer(trainer trainer);
    void deleteTrainer(int id);
}

