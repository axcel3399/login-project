import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD

import { LoginPageComponent } from './auth/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

=======
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
>>>>>>> 93afeb074abc067e815f15841c30bdfcdd79594c
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}