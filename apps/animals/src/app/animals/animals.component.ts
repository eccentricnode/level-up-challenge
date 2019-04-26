import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AnimalsService, Animal, AnimalsFacade } from '@level/core-data';

@Component({
  selector: 'level-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
  form: FormGroup;
  animals$: Observable<Animal[]> = this.animalsFacade.allAnimals$;
  currentAnimal$: Observable<Animal> = this.animalsFacade.currentAnimal$;

  constructor(
    private formBuilder: FormBuilder,
    private animalsService: AnimalsService,
    private animalsFacade: AnimalsFacade,
  ) { }

  ngOnInit() {
    this.initForm();
    this.animalsFacade.loadAnimals();
    this.animalsFacade.mutations$.subscribe(_=> this.resetCurrentAnimal());
    this.resetCurrentAnimal();
  }

  resetCurrentAnimal() {
    this.selectAnimal({id: null})
  }

  selectAnimal(animal) {
    this.animalsFacade.selectAnimal(animal.id);
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      height: ['', Validators.compose([Validators.required])],
      mass: ['', Validators.compose([Validators.required])],
      continent: ['', Validators.compose([Validators.required])],
    })
  }

  getAnimals() {
    this.animals$ = this.animalsService.all();
  }

  saveAnimal(animal) {
    if(!animal.id) {
      this.animalsFacade.addAnimal(animal);
    } else {
      this.animalsFacade.updateAnimal(animal);
    }
  }


  deleteAnimal(animal) {
    this.animalsFacade.deleteAnimal(animal);
  }
}
