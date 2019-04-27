import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Instrument } from '@level/core-data';

@Component({
  selector: 'level-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.scss']
})
export class InstrumentListComponent {
  @Input() instruments: Instrument;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  selectInstrumentSubmit(instrument) {
    this.selected.emit(instrument);
  }
}
