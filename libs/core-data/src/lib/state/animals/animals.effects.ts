import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { AnimalsState } from './animals.reducer';
import {
  LoadAnimals ,
  AnimalsLoaded, 
  AddAnimal,
  AnimalAdded,
  UpdateAnimal,
  AnimalUpdated,
  DeleteAnimal,
  AnimalDeleted,
  AnimalsActionTypes,
} from './animals.actions';
import { AnimalsService } from '../../animals/animals.service';
import { Animal } from '@level/core-data';


@Injectable()
export class AnimalsEffects {
  @Effect() effect$ = this.actions$.pipe(ofType(AnimalsActionTypes.AnimalsAction));

  @Effect()
  loadAnimals$ = this.dataPersistence.fetch(AnimalsActionTypes.LoadAnimals, {
    run: (action: LoadAnimals, state: AnimalsState) => {
      return this.animalsService.all().pipe(map((res: Animal[]) => new AnimalsLoaded(res)))
    },

    onError: (action: LoadAnimals, error) => {
      console.log('Error', error);
    }
  });

  @Effect()
  addAnimal$ = this.dataPersistence.pessimisticUpdate(AnimalsActionTypes.AddAnimal, {
    run: (action: AddAnimal, state: AnimalsState) => {
      return this.animalsService.create(action.payload).pipe(map((res: Animal) => new AnimalAdded(res)))
    },

    onError: (action: AddAnimal, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  updateAnimal$ = this.dataPersistence.pessimisticUpdate(AnimalsActionTypes.UpdateAnimal, {
    run: (action: UpdateAnimal, state: AnimalsState) => {
      return this.animalsService.update(action.payload).pipe(map((res: Animal) => new AnimalUpdated(res)))
    },

    onError: (action: UpdateAnimal, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  deleteAnimal$ = this.dataPersistence.pessimisticUpdate(AnimalsActionTypes.DeleteAnimal, {
    run: (action: DeleteAnimal, state: AnimalsState) => {
      return this.animalsService.delete(action.payload).pipe(map(_ => new AnimalDeleted(action.payload)))
    },
    onError: (action: DeleteAnimal, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AnimalsState>,
    private animalsService: AnimalsService
  ) {}
}