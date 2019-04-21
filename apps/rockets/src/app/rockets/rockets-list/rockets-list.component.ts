import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Rockets } from '@level/core-data';

@Component({
  selector: 'level-rockets-list',
  templateUrl: './rockets-list.component.html',
  styleUrls: ['./rockets-list.component.scss']
})
export class RocketsListComponent {
  @Input() rockets: Rockets;
  @Output() selected = new EventEmitter();

  selectRocketSubmit(rocket) {
    this.selected.emit(rocket);
  }
}
