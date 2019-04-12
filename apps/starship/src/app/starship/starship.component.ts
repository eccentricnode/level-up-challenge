import { Component, OnInit } from '@angular/core';

import { Starships, StarshipsService } from '@level/core-data';

@Component({
  selector: 'level-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {
  starships$;
  selectedStarship: Starships;

  constructor(private starshipsService: StarshipsService) { }

  ngOnInit() {
    this.getStarships();
  }

  getStarships() {
    this.starships$ = this.starshipsService.all();
  }

  selectStarship(starship: Starships) {
    this.selectedStarship = starship;
    console.log(starship)
  }
}
