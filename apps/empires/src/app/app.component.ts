import { Component } from '@angular/core';

@Component({
  selector: 'level-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Age of Empires App';
  links = [
    { path: '/login', icon: 'home', title: 'Login' },
    { path: '/empires', icon: 'format_list_bulleted', title: 'Civilation List'}
  ]
}
