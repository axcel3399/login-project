import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;
  errorMessage = '';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      remember: [false] // чекбокс Remember me
    });


    this.loginForm.reset();
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Пожалуйста, заполните все поля и убедитесь, что пароль ≥ 4 символов';
      return;
    }

    const { login, password, remember } = this.loginForm.value;

    // Сохраняем пользователя всегда
    const userData = { login, password };
    if (remember) {
      localStorage.setItem('user', JSON.stringify(userData));
      sessionStorage.removeItem('user'); // на всякий случай чистим
    } else {
      sessionStorage.setItem('user', JSON.stringify(userData));
      localStorage.removeItem('user'); // на всякий случай чистим
    }

    this.loginForm.reset();
    this.router.navigate(['/home']);
  }
}
