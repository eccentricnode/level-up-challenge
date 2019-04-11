import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { PokemonService, PokemonMeta } from '@level/core-data';

@Component({
  selector: 'level-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  form: FormGroup;
  pokemons$;
  selectedPokemon$: Observable<PokemonMeta>;

  constructor(
    private pokemonService: PokemonService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.getPokemons();
    this.initForm();
  }

  selectPokemon(pokemon) {
    this.selectedPokemon$ = this.pokemonService.getUrlWithId(pokemon.url);
    console.log(this.selectedPokemon$);
  }

  resetPokemon() {
    const emptyPokemon = {
      id: null,
      name: null,
      height: null,
      weight: null,
      base_experience: null
    }
    this.selectPokemon(emptyPokemon);
  }

  getPokemons() {
    this.pokemons$ = this.pokemonService.all();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: { value: '', disabled: true },
      height: { value: '', disabled: true },
      weight: { value: '', disabled: true },
      base_experience: { value: '', disabled: true }
    });
  }
}
