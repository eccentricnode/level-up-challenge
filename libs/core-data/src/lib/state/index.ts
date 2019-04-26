import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAnimals from './animals/animals.reducer';

import { Animal } from '../animals/animal.model';

export interface AppState {
    animals: fromAnimals.AnimalsState
}

export const reducers: ActionReducerMap<AppState> = {
    animals: fromAnimals.animalsReducer
}

//----------------------------------------------------
// Animals Selectors
//----------------------------------------------------
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