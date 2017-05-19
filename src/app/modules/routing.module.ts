import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../routes/notFound/not-found.component'
import { LoginComponent } from '../routes/login/login.component'
import { DashboardComponent } from '../routes/dashboard/dashboard.component'
import { AccountDetailComponent } from '../routes/account/account.component'

const routes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'account/:id', component: AccountDetailComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}