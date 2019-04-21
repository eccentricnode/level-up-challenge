import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './pokemon/pokemon.service';
import { TokenInterceptor } from './auth/token-interceptor.service';
import { Rockets } from './rockets/rockets.model/rockets.model.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    PokemonService,
    TokenInterceptor
  ],
  declarations: [Rockets.ModelComponent]
})
export class CoreDataModule {}
