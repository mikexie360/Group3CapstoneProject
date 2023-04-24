import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserRegisterAndLoginComponent } from './user-register-and-login/user-register-and-login.component';
import { AdminRegisterAndLoginComponent } from './admin-register-and-login/admin-register-and-login.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'usersignuplogin', component: UserRegisterAndLoginComponent},
  { path: 'admin', component: AdminRegisterAndLoginComponent},


  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
