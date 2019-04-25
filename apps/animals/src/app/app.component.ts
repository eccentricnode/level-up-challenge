import { Component } from '@angular/core';

@Component({
  selector: 'level-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'animals'; 
  links = [
    { path: '/login', icon: 'home', title: 'Login' },
    { path: '/animals', icon: 'format_list_bulleted', title: 'Animal\'s List' }
  ]
}
