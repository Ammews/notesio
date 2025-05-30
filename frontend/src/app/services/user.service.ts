import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.api

  constructor(private httpClient: HttpClient) {
    
  }

  getUser(){
    return this.httpClient.get<User[]>(`${this.url}/user/all`)
  }
}
