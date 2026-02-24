import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';

interface User {
  name: string;
  email: string;
}

interface Patient {
  id: number;
  user: User;
}

interface Appoitment {
  id: number;
  status: string;
  patient: Patient;
}



@Component({
  selector: 'app-doctor-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctor-dashboard.component.html',
  styleUrl: './doctor-dashboard.component.css',
})
export class DoctorDashboardComponent implements OnInit{
  appointments: Appoitment[] = [];

 constructor(private http: HttpClient) {}

 ngOnInit(){
 this.loadAppoitments();
   
 }

 loadAppoitments(){
  const token = localStorage.getItem('token');

  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });

  this.http.get(`${environment.apiUrl}/doctor/dashboard`, {headers})
  .subscribe((res:any)=>{
    this.appointments = res.appointments;

      error: (err:any) => { console.error('API Error:', err); }
  });

 }

 cancelAppoitment(id:number){
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`

  });

  this.http.delete(`${environment.apiUrl}/appoitments/${id}`, {headers})
  .subscribe(()=>{
    alert("Appoitment Cancelled");
    this.loadAppoitments();
  });



 }

}
