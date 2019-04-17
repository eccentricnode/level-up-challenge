import { Component } from '@angular/core';

@Component({
  selector: 'level-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'youtube-playlist';
  links = [
    { path: '/login', icon: 'home', title: 'Login' },
    { path: 'youtube', icon: 'video_library', title: 'Youtube Playlist'}
  ]
}
