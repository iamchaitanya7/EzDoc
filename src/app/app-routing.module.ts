import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  //Initial Route
  {
    path: '', redirectTo: '/welcome', pathMatch: 'full'
  },

  //Welcome Route
  {
    path: 'welcome', component: WelcomeComponent
  },

  //Login Route
  {
    path: 'login', component: LoginComponent
  },

  // //Page Not Found Route (component: PageNotFound)
  // {
  //   path: '**', redirectTo: '/welcome', pathMatch: 'full'
  // }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
