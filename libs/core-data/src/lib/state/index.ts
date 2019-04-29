import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAnimals from './animals/animals.reducer';
import * as fromInstruments from './instruments/instrument.reducer';
import * as fromStarships from './starships/starships.reducer';

import { Animal } from '../animals/animal.model';
import { Instrument } from '../instrument/instrument.model';
import { Starship } from '../starships/starship.model';

export interface AppState {
    animals: fromAnimals.AnimalsState,
    instruments: fromInstruments.InstrumentsState,
    starships: fromStarships.StarshipsState
}

export const reducers: ActionReducerMap<AppState> = {
    animals: fromAnimals.animalsReducer,
    instruments: fromInstruments.instrumentsReducer,
    starships: fromStarships.starshipsReducer
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

// ------------------------------------------------------------------
// STARSHIPS SELECTORS
// ------------------------------------------------------------------
export const selectStarshipsState = createFeatureSelector<fromStarships.StarshipsState>('starships');

export const selectStarshipIds = createSelector(
    selectStarshipsState,
    fromStarships.selectStarshipIds
);
export const selectStarshipEntities = createSelector(
    selectStarshipsState,
    fromStarships.selectStarshipEntities
);
export const selectAllStarships = createSelector(
    selectStarshipsState,
    fromStarships.selectAllStarships
);
export const selectCurrentStarshipId = createSelector(
    selectStarshipsState,
    fromStarships.getSelectedStarshipId
);

const emptyStarship: Starship = {
    name: '',
    model: '',
    manufacturer: '',
    crew: '',
    passengers: '',
    cargo_capacity: ''
}

export const selectCurrentStarship = createSelector(
    selectStarshipEntities,
    selectCurrentStarshipId,
    (starshipEntities, starshipId) => {
        return starshipId ? starshipEntities[starshipId] : emptyStarship;
    }
);