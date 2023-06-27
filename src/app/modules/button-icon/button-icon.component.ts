import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconLinksEnum, IconName } from './button-icon.types';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss']
})
export class ButtonIconComponent {
  @Input() icon!: IconName;
  @Input() bordered = false;
  @Output() btnClick = new EventEmitter();
  
  get link(): string {
    const key = this.icon;
    return IconLinksEnum[key];
  }

  onClick() {
    this.btnClick.emit();
  }

  get isAction(): boolean {
    return this.icon == 'pen' || this.icon == 'cross';
  }
}
