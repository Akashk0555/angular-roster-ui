import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-assign-shift',
  templateUrl: './assign-shift.component.html',
  styleUrl: './assign-shift.component.scss'
})
export class AssignShiftComponent implements OnInit {
  loginForm!: FormGroup;

  roles = ['Admin', 'User', 'Guest']; // dropdown options

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: [null, Validators.required] 
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form Submitted:', this.loginForm.value);
      // TODO: add login logic
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get role() {
    return this.loginForm.get('role');
  }
}