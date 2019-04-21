import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Empires } from '@level/core-data';

@Component({
  selector: 'level-civilizations-details',
  templateUrl: './civilizations-details.component.html',
  styleUrls: ['./civilizations-details.component.scss']
})
export class CivilizationsDetailsComponent {
  @Input() detailsGroup: FormGroup;
  @Output() reset = new EventEmitter();

  @Input() set selectedCivilation(value: Empires) {
    this.detailsGroup.patchValue({
      name: value.name,
      expansion: value.expansion,
      army_type: value.army_type,
      unique_unit: value.unique_unit,
      unique_tech: value.unique_tech,
      team_bonus: value.team_bonus,
      civilization_bonus: value.civilization_bonus,
    });
  }

  resetFormSubmit() {
    this.reset.emit();
  }
}
