package com.wheel.controllers;

import com.wheel.models.users.User;
import com.wheel.models.users.UserDTO;
import com.wheel.models.users.UserSendDTO;
import com.wheel.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private final UserService userService;

    @GetMapping("all")
    public List<UserSendDTO> getEmployees() {
        return userService.getEmployees();
    }

    @PostMapping("register")
    public User postEmployee(@RequestBody UserDTO employee) {
        return userService.postEmployee(employee);
    }

    @PutMapping("delete")
    public void deleteAllEmployees() {
        userService.deleteAllEmployees();
    }
}
