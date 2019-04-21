import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Empires } from '@level/core-data';

@Component({
  selector: 'level-civilizations-list',
  templateUrl: './civilizations-list.component.html',
  styleUrls: ['./civilizations-list.component.scss']
})
export class CivilizationsListComponent {
  @Input() civilizations: Empires;
  @Output() selected = new EventEmitter();

  selectCivilizationSubmit(civilization: Empires) {
    this.selected.emit(civilization);
  }
}
