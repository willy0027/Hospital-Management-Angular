import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [FormsModule]
})
export class RegisterComponent {

  name = '';
  email = '';
  password = '';
  phone = '';

  constructor(private auth: AuthService) {}

  register() {
    const payload = {
      name: this.name,
      email: this.email,
      password: this.password,
      phone: this.phone
    };

    this.auth.register(payload).subscribe({
      next: () => alert('Registered successfully'),
      error: err => console.error(err)
    });
  }
}
