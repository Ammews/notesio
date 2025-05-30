import { Component, Input, input } from '@angular/core';
import { InputTextAccountComponent } from '../input-text-account/input-text-account.component';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-default',
  imports: [CommonModule, InputTextAccountComponent],
  templateUrl: './login-default.component.html',
  styleUrl: './login-default.component.scss'
})
export class LoginDefaultComponent {
  @Input() title: string="";
  @Input() primaryBtnText: string="";
  @Input() secondaryBtnText: string="";


}
