import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @Output() onValueChange = new EventEmitter();

  isSearching = false;

  searchControl = new FormControl();

  constructor() {
    this.searchControl.valueChanges
      .pipe(
        distinctUntilChanged(),
        tap(() => (this.isSearching = true)),
        debounceTime(600),
        tap((value: string) => this.handleChange(value))
      )
      .subscribe({
        next: (results: any) => {
          console.log('Результаты поиска:', results);
          this.isSearching = false;
        },
      });
  }

  handleChange(value: string) {
    this.onValueChange.emit(value);
  }
}
