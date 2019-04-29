import { Action } from '@ngrx/store';
import { Starship } from '@level/core-data';

export enum StarshipsActionTypes {
  StarshipsAction = '[Starships] Action',
  StarshipSelected = '[Starships] Selected',
  LoadStarships = '[Starships] Load Data',
  StarshipsLoaded = '[Starships] Data Loaded',
  AddStarship = '[Starships] Add Data',
  StarshipAdded = '[Starships] Data Added',
  UpdateStarship = '[Starships] Update Data',
  StarshipUpdated = '[Starships] Data Updated',
  DeleteStarship = '[Starships] Delete Data',
  StarshipDeleted = '[Starships] Data Deleted'
}

export class Starships implements Action {
  readonly type = StarshipsActionTypes.StarshipsAction;
}

export class StarshipSelected implements Action {
  readonly type = StarshipsActionTypes.StarshipSelected;
  constructor(public payload) { }
}

export class LoadStarships implements Action {
  readonly type = StarshipsActionTypes.LoadStarships;
  constructor() { }
}

export class StarshipsLoaded implements Action {
  readonly type = StarshipsActionTypes.StarshipsLoaded;
  constructor(public payload: Starship[]) { }
}

export class AddStarship implements Action {
  readonly type = StarshipsActionTypes.AddStarship;
  constructor(public payload: Starship) { }
}

export class StarshipAdded implements Action {
  readonly type = StarshipsActionTypes.StarshipAdded;
  constructor(public payload: Starship) { }
}

export class UpdateStarship implements Action {
  readonly type = StarshipsActionTypes.UpdateStarship;
  constructor(public payload: Starship) { }
}

export class StarshipUpdated implements Action {
  readonly type = StarshipsActionTypes.StarshipUpdated;
  constructor(public payload: Starship) { }
}

export class DeleteStarship implements Action {
  readonly type = StarshipsActionTypes.DeleteStarship;
  constructor(public payload: Starship) { }
}

export class StarshipDeleted implements Action {
  readonly type = StarshipsActionTypes.StarshipDeleted;
  constructor(public payload: Starship) { }
}

export type StarshipsActions = Starships
  | StarshipSelected
  | LoadStarships
  | StarshipsLoaded
  | AddStarship
  | StarshipAdded
  | UpdateStarship
  | StarshipUpdated
  | DeleteStarship
  | StarshipDeleted
;