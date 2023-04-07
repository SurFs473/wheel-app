import { FormControl } from "@angular/forms";

export interface UserDTO {
     username: string,
     nickname: string,
     firstName: string,
     lastName: string
}

export interface RegisterForm {
     username: FormControl<string>;
     password: FormControl<string>;
     nickname: FormControl<string>;
     firstName: FormControl<string>;
     lastName: FormControl<string>;
   }