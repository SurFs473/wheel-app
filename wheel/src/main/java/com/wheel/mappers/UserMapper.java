package com.wheel.mappers;

import com.wheel.models.users.User;
import com.wheel.models.users.UserDTO;
import com.wheel.models.users.UserSendDTO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class UserMapper {

    public User mapToEntity(UserDTO userDTO) {
        User user = new User();
        user.setUsername(userDTO.username());
        user.setPassword(userDTO.password());
        user.setNickname(userDTO.nickname());
        user.setFirstName(userDTO.firstName());
        user.setLastName(userDTO.lastName());
        return user;
    }

    public List<UserSendDTO> mapToDTO(List<User> users) {
        return users.stream().map(this::buildEmployeeSendDTO).toList();
    }

    private UserSendDTO buildEmployeeSendDTO(User user) {
        return new UserSendDTO(
                user.getUsername(),
                user.getNickname(),
                user.getFirstName(),
                user.getLastName()
        );
    }
}
