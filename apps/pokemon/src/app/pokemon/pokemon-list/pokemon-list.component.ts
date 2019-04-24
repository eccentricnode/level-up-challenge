import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '@level/core-data';

@Component({
  selector: 'level-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent  {
  @Input() pokemons: Pokemon[];
  @Output() selected = new EventEmitter();

  selectedPokemonSubmit(pokemon) {
    this.selected.emit(pokemon);
  }
}
