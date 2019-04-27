import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AnimalsEffects } from './animals/animals.effects';
import { AnimalsFacade } from './animals/animals.facade';
import { NxModule } from '@nrwl/nx';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from '.';

import { InstrumentEffects } from './instruments/instrument.effects';
import { InstrumentFacade } from './instruments/instrument.facade';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    EffectsModule.forRoot([AnimalsEffects, InstrumentEffects]),
  ],
  providers: [AnimalsFacade, InstrumentFacade]
})
export class StateModule {}
