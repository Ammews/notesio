import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentInjector, Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.api
  private username = 'user';
  private password = '197cab64-6257-495a-b0a0-97ade3a312b2';

  constructor(private httpClient: HttpClient) {
    
  }

      private getAuthHeader(): HttpHeaders {
      const authString = btoa(`${this.username}:${this.password}`);
      return new HttpHeaders({
        'Authorization': `Basic ${authString}`
      });
    }
    
  getUser(){
    return this.httpClient.get<User[]>(`${this.url}/user/all`)
  }

  authUser(email: string, password: string){
    return this.httpClient.get<User[]>(`${this.url}/user/email/${email}/${password}`)
  }
}
