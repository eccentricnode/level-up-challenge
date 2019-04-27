import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Instrument, InstrumentFacade } from '@level/core-data';

@Component({
  selector: 'level-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.scss']
})
export class InstrumentComponent implements OnInit {
  form: FormGroup;
  instruments$: Observable<Instrument[]> = this.instrumentFacade.allInstrument$;
  currentInstrument$: Observable<Instrument> = this.instrumentFacade.currentInstrument$;

  constructor(
    private formBuilder: FormBuilder,
    private instrumentFacade: InstrumentFacade
  ) { }

  ngOnInit() {
    this.initForm();
    this.instrumentFacade.loadInstruments();
    this.instrumentFacade.mutations$.subscribe(_ => this.resetCurrentInstrument());
    this.resetCurrentInstrument();
  }

  resetCurrentInstrument() {
    this.selectInstrument({id: null});
    this.form.reset();
  }

  selectInstrument(instrument) {
    this.instrumentFacade.selectInstrument(instrument.id);
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.compose([Validators.required])],
      year: ['', Validators.compose([Validators.required])],
      inventor: ['', Validators.compose([Validators.required])],
      country: ['', Validators.compose([Validators.required])]
    })
  }

  saveInstrument(instrument) {
    if(!instrument.id) {
      this.instrumentFacade.addInstrument(instrument);
    } else {
      this.instrumentFacade.updateInstrument(instrument);
    }
  }

  deleteInstrument(instrument) {
    this.instrumentFacade.deleteInstrument(instrument);
  }
}
