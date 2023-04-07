import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { RegisterForm } from '../models/userDTO';

interface User {
  username: string;
  password: string;
  nickname: string;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private registerUrl: string = 'http://localhost:8080/user/register'
  private getAllEmplyeesUrl: string = 'http://localhost:8080/user/all'

  constructor(private http: HttpClient) { }

  public registerUser(userForm: FormGroup<RegisterForm>): Observable<any> {
    const user = this.buildUser(userForm)
    return this.http.post<any>(this.registerUrl, user)
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<any>(this.getAllEmplyeesUrl)
  }

  private buildUser(userForm: FormGroup<RegisterForm>): User {
    return {
      username: userForm.controls.username.value,
      password: userForm.controls.password.value,
      nickname: userForm.controls.nickname.value,
      firstName: userForm.controls.firstName.value,
      lastName: userForm.controls.lastName.value
    }
  }
}
