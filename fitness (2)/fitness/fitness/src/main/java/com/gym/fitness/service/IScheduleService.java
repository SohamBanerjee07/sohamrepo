package com.gym.fitness.service;


import com.gym.fitness.models.schedule;
import java.util.List;

public interface IScheduleService {
    schedule createClass( schedule Schedule);
    schedule getClassById(int id);
    List< schedule> getAllClasses();
    schedule updateClass( schedule Schedule);
    void deleteClass(int id);
}
