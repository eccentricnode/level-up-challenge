import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { selectAllAnimals, selectCurrentAnimal } from '..';
import { AnimalsActionTypes } from './animals.actions';
import * as AnimalsActions from './animals.actions';
import { AnimalsState } from './animals.reducer';

@Injectable({
  providedIn: 'root'
})
export class AnimalsFacade {
  allAnimals$ = this.store.pipe(select(selectAllAnimals));
  currentAnimal$ = this.store.pipe(select(selectCurrentAnimal));

  mutations$ = this.actions$
    .pipe(
      filter(action =>
      action.type === AnimalsActionTypes.AddAnimal
      || action.type === AnimalsActionTypes.UpdateAnimal
      || action.type === AnimalsActionTypes.DeleteAnimal  
      )
    );

  constructor(
    private store: Store<AnimalsState>,
    private actions$: ActionsSubject
    ) {}

  selectAnimal(itemId) {
    this.store.dispatch(new AnimalsActions.AnimalSelected(itemId));
  }

  loadAnimals() {
    this.store.dispatch(new AnimalsActions.LoadAnimals());
  }

  addAnimal(item) {
    this.store.dispatch(new AnimalsActions.AddAnimal(item));
  }

  updateAnimal(item) {
    this.store.dispatch(new AnimalsActions.UpdateAnimal(item));
  }

  deleteAnimal(item) {
    this.store.dispatch(new AnimalsActions.DeleteAnimal(item));
  }
}
