import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkTheme = true;

  constructor() { }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme
  }
}
