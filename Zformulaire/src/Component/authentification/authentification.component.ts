import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.css'
})
export class AuthentificationComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router // Inject Router
  ) {}

  ngOnInit() {
    this.initLoginForm();
  }

  private initLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['test@test.test', [Validators.required, Validators.email]],
      password: ['test', Validators.required]
    });
  }

  login() {
    // Check if email and password are valid
    if (this.loginForm.valid && this.loginForm.value.email === 'test@test.test' && this.loginForm.value.password === 'test') {
      // Navigate to the report component upon successful login
      this.router.navigate(['/report/home']);
    } else {
      // Handle invalid login
      alert('Invalid email or password!');
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
