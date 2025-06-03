import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-database-component',
  imports: [FormsModule],
  templateUrl: './database-component.component.html',
  styleUrl: './database-component.component.css'
})
export class DatabaseComponentComponent {
  users: User[] = []
  public email: string = '';
  public password: string = '';

  constructor(private userService: UserService){
    this.getAllUsers();
    
  }

  getAllUsers(){
    this.userService.getUser().subscribe(users => this.users = users)
  } 
  
  getAuthUser(){
    this.userService.authUser(this.email, this.password).subscribe({
  next: (users) => {
    this.users = users;
    console.log("Autenticado!");
  },
  error: (err) => {
    if (err.status === 401) {
      console.log("Email ou senha incorretos!"); // Credenciais inválidas
    } else {
      console.error("Erro no servidor:", err); // Outros erros (500, 404, etc.)
    }
  }
});
  } 
}
