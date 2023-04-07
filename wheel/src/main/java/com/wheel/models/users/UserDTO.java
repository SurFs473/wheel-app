package com.wheel.models.users;

public record UserDTO(String username,
                      String password,
                      String nickname,
                      String firstName,
                      String lastName) {
}
