import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
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

    this.loginForm.reset();
  }

  onSubmit(): void {

    if (this.loginForm.invalid) {
      this.errorMessage = 'Пожалуйста, заполните все поля и убедитесь, что пароль ≥ 4 символов';
      return;
    }

    const { login, password } = this.loginForm.value;

    const userData = { login, password };

    localStorage.setItem('user', JSON.stringify(userData));

    this.loginForm.reset();

    this.router.navigate(['/home']);
  }
}