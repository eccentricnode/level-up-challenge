import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAnimals from './animals/animals.reducer';
import * as fromInstruments from './instruments/instrument.reducer';

import { Animal } from '../animals/animal.model';
import { Instrument } from '../instrument/instrument.model';

export interface AppState {
    animals: fromAnimals.AnimalsState,
    instruments: fromInstruments.InstrumentsState
}

export const reducers: ActionReducerMap<AppState> = {
    animals: fromAnimals.animalsReducer,
    instruments: fromInstruments.instrumentsReducer
}

//-------------------------------------------------------------------
// Animals Selectors
//-------------------------------------------------------------------
export const selectAnimalsState = createFeatureSelector<fromAnimals.AnimalsState>('animals');

export const selectAnimalIds = createSelector(
    selectAnimalsState,
    fromAnimals.selectAnimalIds
);
export const selectAnimalEntities = createSelector(
    selectAnimalsState,
    fromAnimals.selectAnimalEntities
);
export const selectAllAnimals = createSelector(
    selectAnimalsState,
    fromAnimals.selectAllAnimals
);
export const selectCurrentAnimalId = createSelector(
    selectAnimalsState,
    fromAnimals.getSelectedAnimalId
)

const emptyAnimal: Animal = {
    id: null,
    name: '', 
    height: '',
    mass: null,
    continent: ''
}

export const selectCurrentAnimal = createSelector(
    selectAnimalEntities,
    selectCurrentAnimalId,
    (animalEntities, animalId) => {
        return animalId ? animalEntities[animalId] : emptyAnimal;
    }
);

// ------------------------------------------------------------------
// INSTRUMENTS SELECTORS
// ------------------------------------------------------------------

export const selectInstrumentsState = createFeatureSelector<fromInstruments.InstrumentsState>('instruments');

export const selectInstrumentIds = createSelector(
    selectInstrumentsState,
    fromInstruments.selectInstrumentIds
);
export const selectInstrumentEntities = createSelector(
    selectInstrumentsState,
    fromInstruments.selectInstrumentEntites
);
export const selectAllInstruments = createSelector(
    selectInstrumentsState,
    fromInstruments.selectAllInstruments
);
export const selectCurrentInstrumentId = createSelector(
    selectInstrumentsState,
    fromInstruments.getSelectedInstrumentId
);

const emptyInstrument: Instrument = {
    id: null,
    name: '',
    year: '',
    inventor: '',
    country: ''
}

export const selectCurrentInstrument = createSelector(
    selectInstrumentEntities,
    selectCurrentInstrumentId,
    (instrumentEntities, instrumentId) => {
        return instrumentId ? instrumentEntities[instrumentId] : emptyInstrument;
    }
);