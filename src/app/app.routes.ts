import { Routes } from '@angular/router';
import { UserLogin } from './user-login/user-login';
import { Homepage } from './homepage/homepage';
import { Edashboarddisplay } from './edashboarddisplay/edashboarddisplay';
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: Homepage, pathMatch: 'full' },   // default route
  { path: 'user-login', component: UserLogin },
  { path: 'edashboarddisplay', component: Edashboarddisplay },
  // { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }   // fallback redirect
];
