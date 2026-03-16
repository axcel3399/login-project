import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private router = inject(Router);

  userLogin: string = '';

  ngOnInit() {

    const user = localStorage.getItem('user');

    if (!user) {
      this.router.navigate(['/login']);
      return;
    }

    this.userLogin = JSON.parse(user).login;

  }

  confirmLogout() {

    const confirmExit = window.confirm('Вы уверены, что хотите выйти?');

    if (confirmExit) {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    }

  }

}
