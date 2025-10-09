import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private activeTheme: 'light-theme' | 'dark-theme' = 'light-theme';

  constructor() {}

  setTheme(theme: 'light-theme' | 'dark-theme') {
    const body = document.body;
    body.classList.remove('light-theme', 'dark-theme');
    body.classList.add(theme);

    this.activeTheme = theme;
    console.log('Theme applied:', theme);
  }

  toggleTheme() {
    if (this.activeTheme === 'light-theme') {
      this.setTheme('dark-theme');
    } else {
      this.setTheme('light-theme');
    }
  }

  getActiveTheme(): 'light-theme' | 'dark-theme' {
    return this.activeTheme;
  }
}
