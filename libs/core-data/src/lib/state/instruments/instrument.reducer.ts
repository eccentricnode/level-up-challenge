import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Instrument } from '../../instrument/instrument.model';

import { InstrumentsActions, InstrumentsActionTypes } from './instrument.actions';

export interface InstrumentsState extends EntityState<Instrument> {
  selectedInstrumentId: string | null;
}

export const adapter: EntityAdapter<Instrument> = createEntityAdapter<Instrument>();
export const initialState: InstrumentsState = adapter.getInitialState({
  // additional entity state properties  
  selectedInstrumentId: null,
});

export function instrumentsReducer(state = initialState, action: InstrumentsActions): InstrumentsState {
  switch (action.type) {
    case InstrumentsActionTypes.InstrumentSelected: {
      return Object.assign({}, state, { selectedInstrumentId: action.payload });
    }

    case InstrumentsActionTypes.InstrumentsLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case InstrumentsActionTypes.InstrumentAdded: {
      return adapter.addOne(action.payload, state);
    }
    
    case InstrumentsActionTypes.InstrumentUpdated: {
      return adapter.upsertOne(action.payload, state);
    }

    case InstrumentsActionTypes.InstrumentDeleted: {
      return adapter.removeOne(action.payload.id, state); 
    }

    default: 
    return state;
  }
}

export const getSelectedInstrumentId = (state: InstrumentsState) => state.selectedInstrumentId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of animal ids
export const selectInstrumentIds = selectIds;

// select the dictionary of animal entities
export const selectInstrumentEntites = selectEntities;

// select the array of animals
export const selectAllInstruments = selectAll;

// select the total animal count 
export const selectAnimalTotal = selectTotal;