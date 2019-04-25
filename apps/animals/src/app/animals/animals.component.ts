import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimalsService, Animals } from '@level/core-data';

@Component({
  selector: 'level-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
  form: FormGroup;
  animals$;
  selectedAnimal: Animals;

  constructor(
    private formBuilder: FormBuilder,
    private animalsService: AnimalsService
  ) { }

  ngOnInit() {
    this.initForm();
    this.getAnimals();
    this.resetAnimal();
  }

  selectAnimal(animal) {
    this.selectedAnimal = animal;
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      height: ['', Validators.compose([Validators.required])],
      mass: ['', Validators.compose([Validators.required])],
      continent: ['', Validators.compose([Validators.required])],
    })
  }

  resetAnimal() {
    const emptyAnimal: Animals = {
      id: null,
      name: '',
      height: '',
      mass: null,
      continent: ''
    }
    this.selectAnimal(emptyAnimal);
  }

  getAnimals() {
    this.animals$ = this.animalsService.all();
  }

  saveAnimal(animal) {
    if(!animal.id) {
      this.createAnimal(animal);
    } else {
      this.updateAnimal(animal);
    }
  }

  createAnimal(animal) {
    this.animalsService.create(animal)
      .subscribe(result => {
        this.getAnimals();
        this.resetAnimal();
    });
  }

  updateAnimal(animal) {
    this.animalsService.update(animal) 
      .subscribe(result => {
        this.getAnimals();
        this.cancel();
      });
  }

  deleteAnimal(animal) {
    this.animalsService.delete(animal.id) 
      .subscribe(result => this.getAnimals());
  }
  
  cancel() {
    this.resetAnimal();
  }
}
