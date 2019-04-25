import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animals } from '@level/core-data';

@Component({
  selector: 'level-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss']
})
export class AnimalsListComponent {
  @Input() animals: Animals;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  selectAnimalSubmit() {
    this.selected.emit();
  }
}
