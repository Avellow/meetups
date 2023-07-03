import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() view: 'primary' | 'secondary' | 'warn' | 'info' = 'primary';
  @Input() type: 'submit' | 'button' | 'reset' = 'button';
  @Output() btnClick = new EventEmitter();
  @Input() isDisabled = false;

  constructor() { }

  onClick() {
    this.btnClick.emit();
  }
}
