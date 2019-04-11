import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PokemonMeta } from '@level/core-data';

@Component({
  selector: 'level-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent {
  currentPokemon: PokemonMeta;
  originalName;
  @Output() reset = new EventEmitter();
  @Input() group: FormGroup;
  @Input() selectedPokemon: any;

  resetPokemonSubmit() {
    this.reset.emit();
  }
}
