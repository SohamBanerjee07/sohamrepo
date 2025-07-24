package com.gym.fitness.service;


import com.gym.fitness.models.trainer;
import com.gym.fitness.repositories.itrainerrepo;
import com.gym.fitness.service.TrainerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrainerService implements ITrainerService {

    @Autowired
    private itrainerrepo trainerRepository;

    @Override
    public trainer createTrainer(trainer trainer) {
        return trainerRepository.save(trainer);
    }

    @Override
    public trainer getTrainerById(int id) {
        Optional<trainer> optional = trainerRepository.findById(id);
        return optional.orElse(null);
    }

    @Override
    public List<trainer> getAllTrainers() {
        return trainerRepository.findAll();
    }

    @Override
    public trainer updateTrainer(trainer trainer) {
        return trainerRepository.save(trainer);
    }

    @Override
    public void deleteTrainer(int id) {
        trainerRepository.deleteById(id);
    }
}

