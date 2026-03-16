import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  userLogin: string = '';

  constructor(private router: Router) {
    const user = localStorage.getItem('user') || sessionStorage.getItem('user');

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
      sessionStorage.removeItem('user');
      this.router.navigate(['/login']);
    }
  }
}
