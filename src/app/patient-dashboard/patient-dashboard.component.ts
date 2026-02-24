import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-patient-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './patient-dashboard.component.html',
  styleUrl: './patient-dashboard.component.css',
})
export class PatientDashboardComponent {
  subject = '';
  message = '';

  constructor(private http: HttpClient) {}

  sendInquiry() {
    const data = {
      subject: this.subject,
      message: this.message
    };

    console.log(data);


    const token= localStorage.getItem('token')
    this.http.post(`${environment.apiUrl}/inquiry`, data,{
      headers: {
        Authorization: `Bearer ${token}`
      }


    }).subscribe({
      next: (res: any)=> {
        alert('Inquiry sent Successfull');

        this.subject = this.message ='';
      },

  error: (err) => {
    console.log(err);
    alert(JSON.stringify(err.error));
  }


    });

    

  }

}
