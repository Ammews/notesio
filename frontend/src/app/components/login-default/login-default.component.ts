import { Component, Input, input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-default',
  imports: [CommonModule, FormsModule],
  templateUrl: './login-default.component.html',
  styleUrl: './login-default.component.scss'
})
export class LoginDefaultComponent {
  @Input() title: string="";
  @Input() primaryBtnText: string="";
  @Input() secondaryBtnText: string="";

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
