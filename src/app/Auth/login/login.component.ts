import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';

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
    private http: HttpClient,
    private router: Router
  ) {}

  login() {
    this.auth.login({
      email: this.email,
      password: this.password
    }).subscribe((res: any) => {
      this.auth.saveUser(res.token, res.role);

    if(res.role === 'admin'){
      this.router.navigate(['/admin-dashboard']);
    }

        else if(res.role === 'doctor'){
      this.router.navigate(['/doctor-dashboard']);
    }

    else if(res.role === 'patient'){
      this.router.navigate(['/patient-dashboard']);
    }

    else{
      
      this.router.navigate(['/']);

    }






    });
  }
}
