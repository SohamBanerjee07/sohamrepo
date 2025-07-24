package com.gym.fitness.service;


import com.gym.fitness.models.user;
import com.gym.fitness.repositories.iuserrepo;
import com.gym.fitness.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUserService {

    @Autowired
    private iuserrepo userRepo;

    @Override
    public user createMember(user member) {
        return userRepo.save(member);
    }

    @Override
    public user getMemberById(int id) {
        Optional<user> optional = userRepo.findById(id);
        return optional.orElse(null);
    }

    @Override
    public List<user> getAllMembers() {
        return userRepo.findAll();
    }

    @Override
    public user updateMember(user member) {
        return userRepo.save(member);
    }

    @Override
    public void deleteMember(int id) {
    	userRepo.deleteById(id);
    }
    @Override
	public user validateUsers(String email, String password) {
		// TODO Auto-generated method stub
		user user=userRepo.findByEmail(email);
		if(user!=null)
		{
			if(user.getPassword().equals(password))
			{
				return user;
			}
		}
		System.out.println("User not found or password did not match!");
		return null;
	}
}
