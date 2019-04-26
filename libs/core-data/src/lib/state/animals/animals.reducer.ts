import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Animal } from '@level/core-data';

import { AnimalsActions, AnimalsActionTypes } from './animals.actions';

export interface AnimalsState extends EntityState<Animal> {
  selectedAnimalId: string | null;
}

export const adapter: EntityAdapter<Animal> = createEntityAdapter<Animal>();
export const initialState: AnimalsState = adapter.getInitialState({
  // additional enitity state properties
  selectedAnimalId: null,
});

export function animalsReducer(state = initialState, action: AnimalsActions): AnimalsState {
  switch(action.type) {
    case AnimalsActionTypes.AnimalSelected: {
      return Object.assign({}, state, { selectedAnimalId: action.payload });
    }

    case AnimalsActionTypes.AnimalsLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case AnimalsActionTypes.AnimalAdded: {
      return adapter.addOne(action.payload, state);
    }

    case AnimalsActionTypes.AnimalUpdated: {console.log(action.payload);
      return adapter.upsertOne(action.payload, state);
    }

    case AnimalsActionTypes.AnimalDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }

    default: 
      return state; 
  }
}

export const getSelectedAnimalId = (state: AnimalsState) => state.selectedAnimalId;

//get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of animal ids
export const selectAnimalIds = selectIds;

// select the dictionary of animal entities
export const selectAnimalEntities = selectEntities;

// select the array of animals
export const selectAllAnimals = selectAll;

// select the total animal count
export const selectAnimalTotal = selectTotal;