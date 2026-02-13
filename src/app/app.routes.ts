import { Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { roleGuard } from './guards/role-guard';


export const routes: Routes = [
    { path:'', redirectTo:'/login', pathMatch:'full' },

    //Public Routes

    { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent },


      { path:'patient', component: PatientDashboardComponent, canActivate:[roleGuard], data:{role:'patient'} },
      { path: 'doctor', component: DoctorDashboardComponent, canActivate:[roleGuard], data:{role:'doctor'} },
      { path: 'admin', component: AdminDashboardComponent, canActivate:[roleGuard], data:{role:'admin'}}


];
