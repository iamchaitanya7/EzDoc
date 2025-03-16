import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AllDoctorsComponent } from './all-doctors/all-doctors.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/welcome', pathMatch: 'full'
  },
  {
    path: 'welcome', component: WelcomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'doctors', component: AllDoctorsComponent
  }

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
