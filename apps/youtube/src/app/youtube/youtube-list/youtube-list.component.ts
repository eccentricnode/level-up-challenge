import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Youtube } from '@level/core-data';

@Component({
  selector: 'level-youtube-list',
  templateUrl: './youtube-list.component.html',
  styleUrls: ['./youtube-list.component.scss']
})
export class YoutubeListComponent {
  @Input() playlist: Youtube;
  @Output() selected = new EventEmitter();

  videoSelectSubmit(video: Youtube) {
    this.selected.emit(video);
  }
}
