import { useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterForm } from '../models/userDTO';
import { UserService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm!: FormGroup<RegisterForm>;
  public hidePassword: boolean = true;
  private users: any;

  constructor (private readonly userService: UserService) { }

  public ngOnInit(): void {
    this.userService.getUsers().subscribe((response) => {
      this.users = response
    })
      this.buildRegisterForm();
  }

  public onConfirmClick(): void {
    console.log(this.users);
    this.userService.registerUser(this.registerForm).subscribe((response) => {
      console.log(response);
    })
    
  }

  private buildRegisterForm(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', { validators: Validators.required, nonNullable: true }),
      password: new FormControl('', { validators: Validators.required, nonNullable: true }),
      nickname: new FormControl('', { validators: Validators.required, nonNullable: true }),
      firstName: new FormControl('', { validators: Validators.required, nonNullable: true }),
      lastName: new FormControl('', { validators: Validators.required, nonNullable: true }),
      })
  }

}
