package com.wheel.models.users;

public record UserSendDTO(
        String username,
        String nickname,
        String firstName,
        String lastName
) {
}
