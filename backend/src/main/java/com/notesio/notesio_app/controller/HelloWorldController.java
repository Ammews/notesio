package com.notesio.notesio_app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.notesio.notesio_app.domain.User;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/hello")
public class HelloWorldController {
    @GetMapping("/get")
    public String Map() {
        return "Hello World";
    }

    @PostMapping("/yourname")
    public String postMethodName(@RequestBody User body) {
        return "Your name is: " + body.getName();  
    }
    
}
