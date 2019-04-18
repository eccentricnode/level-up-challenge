import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'level-spotify-list',
  templateUrl: './spotify-list.component.html',
  styleUrls: ['./spotify-list.component.scss']
})
export class SpotifyListComponent {
  @Input() group: FormGroup;
  @Input() artists;
  @Output() searchQuery = new EventEmitter();
  @Output() selected = new EventEmitter();

  searchArtistsSubmit(search) {
    this.searchQuery.emit(search);
    console.log(this.artists);
  }

  selectArtistSubmit(artist) {
    this.selected.emit(artist);
  }
}
