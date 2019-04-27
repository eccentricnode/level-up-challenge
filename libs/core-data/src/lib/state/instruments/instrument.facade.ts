import { Injectable } from '@angular/core';
import { select, Store, ActionsSubject } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { selectAllInstruments, selectCurrentInstrument } from '..';
import { InstrumentsActionTypes } from './instrument.actions';
import * as InstrumentsActions from './instrument.actions';
import { InstrumentsState } from './instrument.reducer';

@Injectable()
export class InstrumentFacade {
  allInstrument$ = this.store.pipe(select(selectAllInstruments));
  currentInstrument$ = this.store.pipe(select(selectCurrentInstrument));

  mutations$ = this.actions$
    .pipe(
      filter(action => 
        action.type === InstrumentsActionTypes.AddInstrument  
        || action.type === InstrumentsActionTypes.UpdateInstrument
        || action.type === InstrumentsActionTypes.DeleteInstrument
      )
    );

  constructor(private store: Store<InstrumentsState>, private actions$: ActionsSubject) {}

  selectInstrument(itemId) {
    this.store.dispatch(new InstrumentsActions.InstrumentSelected(itemId));
  }

  loadInstruments() {
    this.store.dispatch(new InstrumentsActions.LoadInstruments());
  }

  addInstrument(item) {
    this.store.dispatch(new InstrumentsActions.AddInstrument(item));
  }

  updateInstrument(item) {
    this.store.dispatch(new InstrumentsActions.UpdateInstrument(item));
  }

  deleteInstrument(item) {
    this.store.dispatch(new InstrumentsActions.DeleteInstrument(item));
  }
}
