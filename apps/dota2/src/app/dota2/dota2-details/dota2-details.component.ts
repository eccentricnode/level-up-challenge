import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'level-dota2-details',
  templateUrl: './dota2-details.component.html',
  styleUrls: ['./dota2-details.component.scss']
})
export class Dota2DetailsComponent {
  @Input() detailsGroup: FormGroup;
  @Output() reset = new EventEmitter();

  @Input() set selectedTeam(value) {
    this.detailsGroup.patchValue({
      name: value.name,
      wins: value.wins,
      losses: value.losses,
      rating: value.rating,
    });
  }

  resetFormSubmit() {
    this.reset.emit();
  }
}
