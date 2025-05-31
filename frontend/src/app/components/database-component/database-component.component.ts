import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-database-component',
  imports: [],
  templateUrl: './database-component.component.html',
  styleUrl: './database-component.component.css'
})
export class DatabaseComponentComponent {
  users: User[] = []

  constructor(private userService: UserService){
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getUser().subscribe(users => this.users = users)
  } 
}
