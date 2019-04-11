import { Component } from '@angular/core';

@Component({
  selector: 'level-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemon';
  links = [
    { path: '/login', icon: 'home', title: 'Login' },
    { path: '/pokmeon', icon: 'format_list_bulleted', title: 'List of Pokemon' }
  ]
}
