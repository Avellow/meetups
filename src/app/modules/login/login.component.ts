import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  isLoading = false;
  error: string | null = null;
  form!: FormGroup;
  submitted = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
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
          console.log(this.authService.user);
          //this.router.navigate([]);
        },
        error: (e) => {
          this.submitted = false;
          this.error = e;
        }
      })

  }
}
