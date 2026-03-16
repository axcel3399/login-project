import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(login: string, password: string) {

    const user = {
      login,
      password
    };

    localStorage.setItem('user', JSON.stringify(user));

  }

  logout() {
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }

  getUserLogin(): string {

    const user = localStorage.getItem('user');

    if (!user) return '';

    return JSON.parse(user).login;

  }

}
