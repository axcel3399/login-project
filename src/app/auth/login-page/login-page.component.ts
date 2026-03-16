<<<<<<< HEAD
import { Component, OnInit, inject } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 93afeb074abc067e815f15841c30bdfcdd79594c
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
<<<<<<< HEAD
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {

  private fb = inject(FormBuilder);
  private router = inject(Router);

  loginForm!: FormGroup;
  errorMessage = '';

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      remember: [false]
    });

=======
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

    // Очистка формы при инициализации
>>>>>>> 93afeb074abc067e815f15841c30bdfcdd79594c
    this.loginForm.reset();
  }

  onSubmit(): void {
<<<<<<< HEAD

=======
>>>>>>> 93afeb074abc067e815f15841c30bdfcdd79594c
    if (this.loginForm.invalid) {
      this.errorMessage = 'Пожалуйста, заполните все поля и убедитесь, что пароль ≥ 4 символов';
      return;
    }

<<<<<<< HEAD
    const { login, password } = this.loginForm.value;

    const userData = { login, password };

    localStorage.setItem('user', JSON.stringify(userData));

    this.loginForm.reset();

=======
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
>>>>>>> 93afeb074abc067e815f15841c30bdfcdd79594c
    this.router.navigate(['/home']);
  }
}