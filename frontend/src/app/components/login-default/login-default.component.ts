import { Component, Input, input } from '@angular/core';
import { InputTextAccountComponent } from '../input-text-account/input-text-account.component';

@Component({
  selector: 'app-login-default',
  imports: [InputTextAccountComponent],
  templateUrl: './login-default.component.html',
  styleUrl: './login-default.component.scss'
})
export class LoginDefaultComponent {
  @Input() title: string="";
  @Input() primaryBtnText: string="";
  @Input() secondaryBtnText: string="";


}
