package com.wheel.models.users;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@ToString
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @SequenceGenerator(name = "employee_id_sequence", sequenceName = "employee_id_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "employee_id_sequence")
    public Integer id;
    public String username;
    public String password;
    public String nickname;
    public String firstName;
    public String lastName;


}
