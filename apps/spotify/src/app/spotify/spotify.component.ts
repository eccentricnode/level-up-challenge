import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpotifyService, Spotify } from '@level/core-data';

@Component({
  selector: 'level-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss']
})
export class SpotifyComponent implements OnInit {
  form: FormGroup;
  searchResults$;
  selectedArtist: Spotify;

  constructor(
    private spotifyService: SpotifyService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.artistForm();
  }

  searchMusic(search) {
    this.searchResults$ =  this.spotifyService.searchMusic(search.searchField);
  }

  selectArtist(artist) {
    this.selectedArtist = artist;
    this.form.controls.artistInfo.patchValue({
      name: artist.name,
      genres: artist.genres,
      followers: artist.followers.total
    }); 
  }

  artistForm() {
    this.form = this.formBuilder.group({
      search: this.formBuilder.group({
        searchField: ['', Validators.required]
      }),
      artistInfo: this.formBuilder.group({
        name: [{value: '', disabled: true}],
        genres: [{value: '', disabled: true}],
        followers: [{value: '', disabled: true}]
      })
    });
  }
}
