import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, delay, distinctUntilChanged, fromEvent, map, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @Output() onValueChange = new EventEmitter();
  
  searchControl = new FormControl();

  constructor() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(600),
        distinctUntilChanged(),
        tap((value: string) => this.handleChange(value))
      )
      .subscribe((results: any) => {
        console.log('Результаты поиска:', results);
      });
  }

  handleChange(value: string) {
    this.onValueChange.emit(value);
  }

}
