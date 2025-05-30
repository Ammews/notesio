package com.notesio.notesio_app.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.notesio.notesio_app.domain.User;
import com.notesio.notesio_app.services.UserServices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserServices userServices;

    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<List<User>>(userServices.allUsers(), HttpStatus.OK); 
    }

    @PostMapping("/create")
    public ResponseEntity<User> createUser(@RequestBody User user) {
    User savedUser = userServices.saveUser(user);
    return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
}
    
}
