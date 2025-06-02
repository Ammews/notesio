package com.notesio.notesio_app.controller;

import java.util.Optional;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.notesio.notesio_app.domain.User;
import com.notesio.notesio_app.services.UserServices;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {


    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

    @Autowired
    private UserServices userServices;

    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<List<User>>(userServices.allUsers(), HttpStatus.OK); 
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<User> findByEmail(@PathVariable String email) {
            Optional<User> user = userServices.findByEmail(email);
            
            if (user.isPresent()) {
                return ResponseEntity.ok(user.get());
            } else {
                return ResponseEntity.notFound().build();
            }
    }

    @GetMapping("/email/{email}/{password}")
    public ResponseEntity<User> authUser(@PathVariable String email, @PathVariable String password) {
            Optional<User> user = userServices.findByEmail(email);
            
            if (user.isPresent()) {
                if (encoder.matches(password, user.get().getPassword())) {
                    return ResponseEntity.ok(user.get());
                } else {
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();     
                }
            } else {
                return ResponseEntity.notFound().build();
            }
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> findById(@PathVariable String id) {
            ObjectId objectId = new ObjectId(id);
            Optional<User> user = userServices.findById(objectId);
            
            if (user.isPresent()) {
                return ResponseEntity.ok(user.get());
            } else {
                return ResponseEntity.notFound().build();
            }

    }

    @PostMapping("/create")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User savedUser = userServices.saveUser(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<User> updateUser(@PathVariable String id, @RequestBody User userDetails) {
    ObjectId objectId = new ObjectId(id);
    Optional<User> user = userServices.findById(objectId);
    
    if (user.isPresent()) {
        User existingUser = user.get();
        // Atualize os campos necessários
        if (userDetails.getName() != null) {
            existingUser.setName(userDetails.getName());
        }
        if (userDetails.getEmail() != null) {
            existingUser.setEmail(userDetails.getEmail());
        }
        if (userDetails.getPassword() != null) {
            existingUser.setPassword(userDetails.getPassword());
        }

        User updatedUser = userServices.saveUser(existingUser);
        return ResponseEntity.ok(updatedUser);
    } else {
        return ResponseEntity.notFound().build();
    }
}

}
