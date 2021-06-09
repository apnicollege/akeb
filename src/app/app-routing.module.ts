import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyRegistrationComponent } from './components/verify-registration/verify-registration.component';
import { WebinarDetailsComponent } from './components/webinar-details/webinar-details.component';
import { WebinarQuestionaireComponent } from './components/webinar-questionaire/webinar-questionaire.component';
import { WebinarsComponent } from './components/webinars/webinars.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'webinars' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'webinars', component: WebinarsComponent },
  { path: 'webinar-details/:wid', component: WebinarDetailsComponent },
  { path: 'info', component: LogInComponent },
  { path: 'verify-registration/:wid', component: VerifyRegistrationComponent },
  { path: 'register/:wid', component: RegisterComponent },
  { path: 'webinar-questionaire/:id/:wid', component: WebinarQuestionaireComponent },
  { path: 'finish', component: LogInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
