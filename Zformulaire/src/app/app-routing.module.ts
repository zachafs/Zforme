import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from '../Component/authentification/authentification.component';
import { ReportComponent } from '../Component/report/report.component';
import { HomeComponent } from '../Component/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to login by default
  { path: 'login', component: AuthentificationComponent }, // Login component
  {
    path: 'report', component: ReportComponent, // Report component
    children: [
      { path: 'home', component: HomeComponent } // Home component as a child of Report
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
