import { Component, Input } from '@angular/core';
import { IconLinksEnum, IconName } from './button-icon.types';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss']
})
export class ButtonIconComponent {
  @Input() icon!: IconName;
  @Input() bordered = false;

  get link(): string {
    const key = this.icon;
    return IconLinksEnum[key];
  }

  get isAction(): boolean {
    return this.icon == 'pen' || this.icon == 'cross';
  }
}
