import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Animal } from '@level/core-data';

@Component({
  selector: 'level-animals-details',
  templateUrl: './animals-details.component.html',
  styleUrls: ['./animals-details.component.scss']
})
export class AnimalsDetailsComponent {
  @Input() detailsGroup: FormGroup;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set selectedAnimal(value: Animal) {
    if(!value) return;
    this.detailsGroup.patchValue({
      name: value.name,
      height: value.height,
      mass: value.mass,
      continent: value.continent
    });
  }

  saveAnimalSubmit(animal: Animal) {
    if(this.detailsGroup.valid) {
      this.saved.emit(animal);
    } 
  }
  
  cancelAnimalSubmit() {
    this.cancelled.emit();
  }
}
