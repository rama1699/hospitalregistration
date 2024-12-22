import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <h1>Hospital Management System</h1>
      
      <div class="auth-options">
        <button (click)="showLogin = true; showRegister = false">Login</button>
        <button (click)="showRegister = true; showLogin = false">Register</button>
      </div>

      <div *ngIf="showLogin" class="form-container">
        <h2>Login</h2>
        <form (ngSubmit)="onLogin()">
          <div class="form-group">
            <label>Unique ID:</label>
            <input type="text" [(ngModel)]="loginData.uniqueId" name="uniqueId" required>
          </div>
          <div class="form-group">
            <label>Password:</label>
            <input type="password" [(ngModel)]="loginData.password" name="password" required>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>

      <div *ngIf="showRegister" class="form-container">
        <h2>Patient Registration</h2>
        <form (ngSubmit)="onRegister()">
          <div class="form-group">
            <label>First Name:</label>
            <input type="text" [(ngModel)]="userData.firstName" name="firstName" required>
          </div>
          <div class="form-group">
            <label>Middle Name:</label>
            <input type="text" [(ngModel)]="userData.middleName" name="middleName">
          </div>
          <div class="form-group">
            <label>Last Name:</label>
            <input type="text" [(ngModel)]="userData.lastName" name="lastName" required>
          </div>
          <div class="form-group">
            <label>Date of Birth:</label>
            <input type="date" [(ngModel)]="userData.dateOfBirth" name="dateOfBirth" required>
          </div>
          <div class="form-group">
            <label>Address:</label>
            <textarea [(ngModel)]="userData.address" name="address" required></textarea>
          </div>
          <div class="form-group">
            <label>State:</label>
            <input type="text" [(ngModel)]="userData.state" name="state" required>
          </div>
          <div class="form-group">
            <label>Country:</label>
            <input type="text" [(ngModel)]="userData.country" name="country" required>
          </div>
          <div class="form-group">
            <label>Mobile Number:</label>
            <input type="tel" [(ngModel)]="userData.mobileNumber" name="mobileNumber" required>
          </div>
          <div class="form-group">
            <label>Relative Name:</label>
            <input type="text" [(ngModel)]="userData.relativeName" name="relativeName" required>
          </div>
          <div class="form-group">
            <label>Relative Mobile Number:</label>
            <input type="tel" [(ngModel)]="userData.relativeMobileNumber" name="relativeMobileNumber" required>
          </div>
          <div class="form-group">
            <label>Existing Illness (if any):</label>
            <textarea [(ngModel)]="userData.existingIllness" name="existingIllness"></textarea>
          </div>
          <div class="form-group">
            <label>Password:</label>
            <input type="password" [(ngModel)]="userData.password" name="password" required>
          </div>
          <div class="form-group">
            <label>Confirm Password:</label>
            <input type="password" [(ngModel)]="confirmPassword" name="confirmPassword" required>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    .auth-options {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }
    .form-container {
      background: #f5f5f5;
      padding: 20px;
      border-radius: 8px;
    }
    .form-group {
      margin-bottom: 15px;
    }
    label {
      display: block;
      margin-bottom: 5px;
    }
    input, textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    button {
      background: #007bff;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background: #0056b3;
    }
  `]
})
export class HomeComponent {
  showLogin = false;
  showRegister = false;
  
  userData: Partial<User> = {
    role: 'patient'
  };
  confirmPassword = '';
  
  loginData = {
    uniqueId: '',
    password: ''
  };

  onLogin() {
    // TODO: Implement login logic
    console.log('Login:', this.loginData);
  }

  onRegister() {
    if (this.userData.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    // Generate a unique ID (this should be done on the server in a real application)
    this.userData.uniqueId = 'PAT' + Math.random().toString(36).substr(2, 9).toUpperCase();
    
    console.log('Register:', this.userData);
    alert(`Registration successful! Your Unique ID is: ${this.userData.uniqueId}`);
  }
}