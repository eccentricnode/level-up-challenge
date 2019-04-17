import { Component, Input } from '@angular/core';
import { Youtube } from '@level/core-data';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'level-youtube-details',
  templateUrl: './youtube-details.component.html',
  styleUrls: ['./youtube-details.component.scss']
})
export class YoutubeDetailsComponent {
  embedded: Youtube;

  @Input() set video(value: Youtube) {
    this.embedded = Object.assign({}, value);
  };

  constructor(private sanitizer: DomSanitizer) {}

  setEmbed() {
    if(this.embedded.snippet.resourceId.videoId) {
      let url: any = 'https://www.youtube.com/embed/';
      url = this.sanitizer.bypassSecurityTrustResourceUrl(`${url}${this.embedded.snippet.resourceId.videoId}`);
      return url;
    }
  }
}
