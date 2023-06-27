import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutePathsEnum } from 'src/app/app-routing.module';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoading = false;
  error: string | null = null;
  form: FormGroup;
  submitted = false;

  constructor(private authService: AuthService, private router: Router) {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    })
  }

  isValidField(name: string):boolean {
    const field = this.form.get(name);
    if (field && field.touched && field.invalid) {
      return false;
    } else {
      return true;
    }
  }

  onLogin() {
    if ( this.form.invalid ) {
      return;
    }
    this.submitted = true;

    const { email, password } = this.form.value;

    this.authService
      .login(email, password)
      .subscribe({
        next: () => {
          this.submitted = false;
          this.error = null;
          this.router.navigate([RoutePathsEnum.MEETUPS]);
        },
        error: (e) => {
          this.submitted = false;
          this.error = e;
        }
      })
  }
}
