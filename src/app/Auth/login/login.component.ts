import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login() {
    this.auth.login({
      email: this.email,
      password: this.password
    }).subscribe((res: any) => {
      this.auth.saveUser(res.token, res.role);
      this.router.navigate(['/']);
    });
  }
}
