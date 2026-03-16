<<<<<<< HEAD
import { Component, inject } from '@angular/core';
=======
import { Component } from '@angular/core';
>>>>>>> 93afeb074abc067e815f15841c30bdfcdd79594c
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
<<<<<<< HEAD
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

  private router = inject(Router);

  userLogin: string = '';

  constructor() {

    const user = localStorage.getItem('user');

=======
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  userLogin: string = '';

  constructor(private router: Router) {
    const user = localStorage.getItem('user') || sessionStorage.getItem('user');
>>>>>>> 93afeb074abc067e815f15841c30bdfcdd79594c
    if (user) {
      this.userLogin = JSON.parse(user).login;
    } else {
      this.router.navigate(['/login']);
    }
<<<<<<< HEAD

  }

  confirmLogout(): void {

    const confirmExit = window.confirm('Вы уверены, что хотите выйти?');

    if (confirmExit) {

      localStorage.removeItem('user');

      this.router.navigate(['/login']);
    }

=======
  }

  confirmLogout(): void {
    const confirmExit = window.confirm('Вы уверены, что хотите выйти?');
    if (confirmExit) {
      localStorage.removeItem('user');
      sessionStorage.removeItem('user');
      this.router.navigate(['/login']);
    }
>>>>>>> 93afeb074abc067e815f15841c30bdfcdd79594c
  }
}