import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';

//hapi 1: krijimi i rutave
const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'movies', component: MoviesComponent},
  {path:'dashboard', component: DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
