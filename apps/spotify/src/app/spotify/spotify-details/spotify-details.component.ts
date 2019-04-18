import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'level-spotify-details',
  templateUrl: './spotify-details.component.html',
  styleUrls: ['./spotify-details.component.scss']
})
export class SpotifyDetailsComponent {
  @Input() group: FormGroup;

  @Input() set selectedArtist(value) {
    console.log(value);
    this.group.patchValue({
      name: value.name,
      genres: value.genres,
      followers: value.followers
    });
  }
}
