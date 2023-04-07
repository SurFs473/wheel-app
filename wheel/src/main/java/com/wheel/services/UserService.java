package com.wheel.services;

import com.wheel.mappers.UserMapper;
import com.wheel.models.users.User;
import com.wheel.models.users.UserDTO;
import com.wheel.models.users.UserSendDTO;
import com.wheel.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public List<UserSendDTO> getEmployees() {
        List<User> users = userRepository.findAll();
        return userMapper.mapToDTO(users);
    }

    public User postEmployee(UserDTO userDTO) {
        User user = userMapper.mapToEntity(userDTO);
        return userRepository.save(user);
    }

    public void deleteAllEmployees() {
        userRepository.deleteAll();
    }
}
