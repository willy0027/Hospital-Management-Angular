import { inject } from '@angular/core';
import { CanActivateFn, Router} from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
 const router = inject(Router);
 const expectedRole = route.data['role'];
 const userRole = localStorage.getItem('role');

 if(userRole === expectedRole){
  return true;
 }

 else{
  router.navigate(['/unauthorized']);
  return false;
 }

};
