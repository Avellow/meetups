import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, public userServ: UsersService) {
    this.form = this.fb.group({}) 
  }

  ngOnInit(): void {

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      fio: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  handleSubmit() {
    const { email, password, role } = this.form.value;
    if (this.form.invalid) {
      return;
    }
    
    this.userServ.addNewUser(this.form.value)

    this.form.reset();
  }

  isValidField(name: string) {
    const field = this.form.get(name);
    if (field && field.touched && field.invalid) {
      return false;
    } else {
      return true;
    }
  }

}
