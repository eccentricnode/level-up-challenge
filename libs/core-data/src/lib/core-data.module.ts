import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './pokemon/pokemon.service';
import { TokenInterceptor } from './auth/token-interceptor.service';
import { StateModule } from './state/state.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StateModule
  ],
  providers:[
    PokemonService,
    TokenInterceptor,
  ],
  declarations: []
})
export class CoreDataModule {}
