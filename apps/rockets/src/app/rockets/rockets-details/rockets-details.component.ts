import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Rockets } from '@level/core-data';

@Component({
  selector: 'level-rockets-details',
  templateUrl: './rockets-details.component.html',
  styleUrls: ['./rockets-details.component.scss']
})
export class RocketsDetailsComponent {
  @Input() detailsGroup: FormGroup;
  @Output() reset = new EventEmitter();

  @Input() set selectedRocket(value: Rockets) {
    this.detailsGroup.patchValue({
      rocket_name: value.rocket_name,
      company: value.company,
      first_flight: value.first_flight,
      success_rate_pct: value.success_rate_pct,
      description: value.description
    })
  }

  resetFormSubmit() {
    this.reset.emit();
  }
}
