import { Component, OnInit, Input } from '@angular/core';
import { Starships } from '@level/core-data';

@Component({
  selector: 'level-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.scss']
})
export class StarshipDetailsComponent {
  @Input() selectedStarship: Starships;
}
