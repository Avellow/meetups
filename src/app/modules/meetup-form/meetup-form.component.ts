import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMeetup } from '../meetup/meetup.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { MeetupsService } from 'src/app/services/meetups.service';
import { IRequestBody } from './meetup-form.interface';
import { RoutePathsEnum } from 'src/app/app-routing.module';

@Component({
  selector: 'app-meetup-form',
  templateUrl: './meetup-form.component.html',
  styleUrls: ['./meetup-form.component.scss'],
})
export class MeetupFormComponent implements OnInit {
  @Input() mode: 'edit' | 'create' = 'create';

  private meetup: IMeetup | null = null;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public route: ActivatedRoute,
    public router: Router,
    public meetupsService: MeetupsService
  ) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    if (this.mode == 'edit') {
      this.route.params.subscribe((params) => {
        this.meetup = this.meetupsService.getById(params['id']);
        this.form = this._createForm();
      });
    } else {
      this.form = this._createForm();
    }
  }

  getCurrentDay(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const day = ('0' + currentDate.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
  }

  private _getDefaultValue(value: keyof IMeetup) {
    return this.meetup ? this.meetup[value] : '';
  }

  private _getDefaultDate() {
    if (this.meetup) {
      return new Date(this.meetup.time).toISOString().substring(0, 10);
    }
    return '';
  }

  private _getDefaultTime() {
    if (this.meetup) {
      return new Date(this.meetup.time).toISOString().substring(11, 16);
    }
    return '';
  }

  private _createForm() {
    const getDefaultValue = this._getDefaultValue.bind(this);
    const getDefaultDate = this._getDefaultDate.bind(this);
    const getDefaultTime = this._getDefaultTime.bind(this);

    const form = this.fb.group({
      name: [getDefaultValue('name'), [Validators.required]],
      date: [getDefaultDate(), [Validators.required]],
      time: [getDefaultTime(), [Validators.required]],
      location: [getDefaultValue('location'), [Validators.required]],
      duration: [getDefaultValue('duration'), [Validators.required]],
      description: ['', [Validators.required]],
      target_audience: ['', [Validators.required]],
      need_to_know: ['', [Validators.required]],
      will_happen: ['', [Validators.required]],
      reason_to_come: ['', [Validators.required]],
    });
    // временно для тог
    form.controls.description.setValue(
      getDefaultValue('description') as string
    );
    form.controls.target_audience.setValue(
      getDefaultValue('target_audience') as string
    );
    form.controls.need_to_know.setValue(
      getDefaultValue('need_to_know') as string
    );
    form.controls.will_happen.setValue(
      getDefaultValue('will_happen') as string
    );
    form.controls.reason_to_come.setValue(
      getDefaultValue('reason_to_come') as string
    );

    return form;
  }

  handleSubmit() {
    if (!this.form.valid) {
      return;
    }
    // работа с датой
    const { date, time } = this.form.value;
    const [hours, minutes] = time.split(':');
    const combinedDate = new Date(`${date}T${hours}:${minutes}`);
    const formattedDate = combinedDate.toISOString();

    const requestBody = {
      ...this.form.value,
      time: formattedDate,
    };

    delete requestBody.date;

    if (this.mode == 'edit') {
      if (this.meetup) {
        this.meetupsService.editMeetup(requestBody, this.meetup.id);
      }
    } else {
      this.meetupsService.createMeetup(requestBody);
    }
    this.router.navigate([RoutePathsEnum.MY_MEETUPS]);
  }

  handleDelete() {
    if (this.meetup) {
      this.meetupsService.deleteMeetup(this.meetup.id);
    }
    this.router.navigate([RoutePathsEnum.MY_MEETUPS]);
  }

  handleCancel() {
    this.router.navigate([RoutePathsEnum.MY_MEETUPS]);
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
