import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Air } from '@level/core-data';

@Component({
  selector: 'level-air-details',
  templateUrl: './air-details.component.html',
  styleUrls: ['./air-details.component.scss']
})
export class AirDetailsComponent {
  @Input() detailsGroup: FormGroup;
  @Output() reset = new EventEmitter();

  @Input() set selectedCity(value: Air) {
    this.detailsGroup.patchValue({
      city: value.city,
      country: value.country,
      locations: value.locations,
      count: value.count
    });
  }

  resetFormSubmit() {
    this.reset.emit();
  }
}
