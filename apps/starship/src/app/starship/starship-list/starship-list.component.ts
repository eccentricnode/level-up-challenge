import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Starships } from '@level/core-data';

@Component({
  selector: 'level-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.scss']
})
export class StarshipListComponent {
  @Input() starships: Starships[];
  @Input() readonly: false;
  @Output() selected = new EventEmitter();

  selectStarshipSubmit(starship: Starships) {
    this.selected.emit(starship);
  }
}
