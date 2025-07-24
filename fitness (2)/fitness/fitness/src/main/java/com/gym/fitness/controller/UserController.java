package com.gym.fitness.controller;


import com.gym.fitness.models.user;
import com.gym.fitness.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/members")
public class UserController {

    @Autowired
    private IUserService UserService;

    @PostMapping
    public user create(@RequestBody user member) {
        return UserService.createMember(member);
    }

    @GetMapping("/{id}")
    public user get(@PathVariable int id) {
        return UserService.getMemberById(id);
    }

    @GetMapping
    public List<user> getAll() {
        return UserService.getAllMembers();
    }

    @PutMapping
    public user update(@RequestBody user member) {
        return UserService.updateMember(member);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        UserService.deleteMember(id);
    }
    @PostMapping(value="/login")
	public user userLogin(@RequestParam("email") String email,
			@RequestParam("password") String password) {
		return UserService.validateUsers(email, password);
	}
}

