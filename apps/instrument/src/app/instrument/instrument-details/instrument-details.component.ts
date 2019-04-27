import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Instrument } from '@level/core-data';

@Component({
  selector: 'level-instrument-details',
  templateUrl: './instrument-details.component.html',
  styleUrls: ['./instrument-details.component.scss']
})
export class InstrumentDetailsComponent {
  @Input() detailsGroup: FormGroup;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set selectedInstrument(value: Instrument) {
    if(!value) return;
    this.detailsGroup.patchValue({
      id: value.id,
      name: value.name,
      year: value.year,
      inventor: value.inventor, 
      country: value.country
    });
  }

  saveInstrumentSubmit(instrument) {
    this.saved.emit(instrument.value);
  }

  cancelInstrumentSubmit(instrument) {
    this.cancelled.emit(instrument);
  }
}
