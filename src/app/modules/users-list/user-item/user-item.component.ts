import { Component, Input, OnInit } from '@angular/core';
import { IUser } from './user.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';



@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {
  @Input() user: IUser | null = null;

  form: FormGroup;

  constructor(private fb: FormBuilder, public userServ: UsersService) {
    this.form = this.fb.group({}) 
  }

  private _getDefaultRole(): 'user' | 'admin' | '' {
    if (this.user) {
      return this.user.roles.some(role => role.id == 1) ? 'admin' : 'user'
    }
    return ''
  }

  ngOnInit(): void {
    const { _getDefaultRole } = this;
    const getDefaultRole = _getDefaultRole.bind(this);

    this.form = this.fb.group({
      email: [this.user?.email || '', [Validators.required, Validators.email]],
      password: [this.user?.password || '', [Validators.required, Validators.minLength(4)]],
      role: [getDefaultRole(), [Validators.required]]
    });
  }

  handleSubmit() {
    const { email, password, role } = this.form.value;
    if (!this.user) {
      return;
    }

    const newUserInfo = {
      email: email,
      password: password,
      fio: this.user.fio
    }

    this.userServ.updateInfo(this.user.id, newUserInfo, role);
  }

  handleRemove() {
    if (this.user) {
      this.userServ.deleteUser(this.user.id);
    }
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
