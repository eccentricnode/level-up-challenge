import { Component } from '@angular/core';

@Component({
  selector: 'level-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spotify';
  links = [
    { path: '/login', icon: 'home', title: 'Login' },
    { path: '/spotify', icon: 'music_note', title: 'Artist Search' }
  ]
}
