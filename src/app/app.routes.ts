import { Routes } from '@angular/router';
import { UserLogin } from './user-login/user-login';
import { Homepage } from './homepage/homepage';


export const routes: Routes = [
  { path: '', component: Homepage, pathMatch: 'full' }, 
  { path: 'user-login', component: UserLogin },
  {path :'edashboarddisplay' ,loadComponent:() => import('./edashboarddisplay/edashboarddisplay').then(m=>m.Edashboarddisplay)},
  { path: '**', redirectTo: '' }
];
