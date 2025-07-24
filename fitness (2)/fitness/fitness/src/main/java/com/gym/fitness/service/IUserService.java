package com.gym.fitness.service;


import com.gym.fitness.models.user;
import java.util.List;

public interface IUserService {
    user createMember(user member);
    user getMemberById(int id);
    List<user> getAllMembers();
    user updateMember(user member);
    void deleteMember(int id);
    public user validateUsers(String email, String password);
}

