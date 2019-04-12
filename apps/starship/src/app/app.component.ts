import { Component } from '@angular/core';

@Component({
  selector: 'level-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'starship';
  links = [
    { path: '/login', icon: 'home', title: 'Login' },
    { path: '/starship', icon: 'format_bulleted_list', title: 'List of Starships'}
  ]
}
