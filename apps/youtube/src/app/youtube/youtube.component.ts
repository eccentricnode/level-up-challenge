import { Component, OnInit } from '@angular/core';
import { Observable, } from 'rxjs';
import { YoutubeService, Youtube } from '@level/core-data';

@Component({
  selector: 'level-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {
  playlist$: Observable<Youtube[]>;
  currentVideo: Youtube;

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit() {
    this.getPlaylist();
  }

  getPlaylist() {
    this.playlist$ = this.youtubeService.getUrl();
  }
  
  selectVideo(video) {
    this.currentVideo = video;
  }
}
