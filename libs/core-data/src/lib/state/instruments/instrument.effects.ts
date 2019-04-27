import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { Instrument } from '../../instrument/instrument.model';
import { InstrumentService } from '../../instrument/instrument.service';

import {
  InstrumentsActionTypes,
  AddInstrument,
  InstrumentAdded,
  UpdateInstrument,
  InstrumentUpdated,
  DeleteInstrument,
  InstrumentDeleted,
  LoadInstruments,
  InstrumentsLoaded,
} from './instrument.actions';
import { InstrumentsState } from './instrument.reducer';

@Injectable()
export class InstrumentEffects {
  @Effect() effect$ = this.actions$.pipe(ofType(InstrumentsActionTypes.InstrumentsAction));

  @Effect() loadInstruments$ = this.dataPersistence.fetch(InstrumentsActionTypes.LoadInstruments, {
    run: (action: LoadInstruments, state: InstrumentsState) => {
      return this.instrumentService.all().pipe(map((res: Instrument[]) => new InstrumentsLoaded(res)));
    },

    onError: (action: LoadInstruments, error) => {
      console.error('Error', error);
    }
  }
  );

  @Effect() addInstruments$ = this.dataPersistence.fetch(InstrumentsActionTypes.AddInstrument, {
    run: (action: AddInstrument, state: InstrumentsState) => {
      return this.instrumentService.create(action.payload).pipe(map((res: Instrument) => new InstrumentAdded(res)));
    },

    onError: (action: AddInstrument, error) => {
      console.error('Error', error);
    }
  }
  );

  @Effect() updateInstruments$ = this.dataPersistence.fetch(InstrumentsActionTypes.UpdateInstrument, {
    run: (action: UpdateInstrument, state: InstrumentsState) => {
      return this.instrumentService.update(action.payload).pipe(map((res: Instrument) => new InstrumentUpdated(res)));
    },

    onError: (action: UpdateInstrument, error) => {
      console.error('Error', error);
    }
  }
  );

  @Effect() deleteInstruments$ = this.dataPersistence.fetch(InstrumentsActionTypes.DeleteInstrument, {
    run: (action: DeleteInstrument, state: InstrumentsState) => {
      return this.instrumentService.delete(action.payload.id).pipe(map(_ => new InstrumentDeleted(action.payload)));
    },

    onError: (action: DeleteInstrument, error) => {
      console.error('Error', error);
    }
  }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<InstrumentsState>,
    private instrumentService: InstrumentService
    ) {}
}
