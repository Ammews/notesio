package com.notesio.notesio_app.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.notesio.notesio_app.domain.User;
import com.notesio.notesio_app.repository.UserRepository;

@Service
public class UserServices {
    
    @Autowired
    private UserRepository userRepository;

    public List<User> allUsers() {
        return userRepository.findAll();
    }
    
    public User saveUser(User user) {
    return userRepository.save(user);
}
}
