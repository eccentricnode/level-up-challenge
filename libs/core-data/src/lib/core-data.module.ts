import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './pokemon/pokemon.service';
import { TokenInterceptor } from './auth/token-interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    PokemonService,
    TokenInterceptor
  ],
  declarations: []
})
export class CoreDataModule {}
