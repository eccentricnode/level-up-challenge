import { Component,  Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '@level/core-data';

@Component({
  selector: 'level-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  @Input() pokemons: Pokemon[];
  @Input() readonly: false;
  @Output() selected = new EventEmitter();

  selectPokemon(pokemon: Pokemon) {
    this.selected.emit(pokemon);
  }
}
