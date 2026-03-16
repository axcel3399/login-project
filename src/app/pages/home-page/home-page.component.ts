import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

  private router = inject(Router);

  userLogin: string = '';

  constructor() {

    const user = localStorage.getItem('user');

    if (user) {
      this.userLogin = JSON.parse(user).login;
    } else {
      this.router.navigate(['/login']);
    }

  }

  confirmLogout(): void {

    const confirmExit = window.confirm('Вы уверены, что хотите выйти?');

    if (confirmExit) {

      localStorage.removeItem('user');

      this.router.navigate(['/login']);
    }

  }
}