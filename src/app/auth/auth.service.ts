import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly storageKey = 'user';

  login(login: string, password: string) {
    localStorage.setItem(this.storageKey, JSON.stringify({ login, password }));
  }

  logout() {
    localStorage.removeItem(this.storageKey);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.storageKey);
  }
}