import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Starship, StarshipsFacade } from '@level/core-data';

@Component({
  selector: 'level-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  form: FormGroup;
  starships$: Observable<Starship[]> = this.starshipsFacade.allStarships$;
  currentStarship$: Observable<Starship> = this.starshipsFacade.currentStarship$; 

  constructor (
    private formBuilder: FormBuilder,
    private starshipsFacade: StarshipsFacade
  ) { }

  ngOnInit() {
    this.initForm();
    this.starshipsFacade.loadStarships();
    this.resetCurrentStarship();
  }

  resetCurrentStarship() {
    this.selectStarship({id: null});
    this.form.reset();
  }

  selectStarship(starship) {
    this.starshipsFacade.selectStarship(starship)
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: {value: '', disabled: true},
      model: {value: '', disabled: true},
      manufacturer: {value: '', disabled: true},
      crew: {value: '', disabled: true},
      passengers: {value: '', disabled: true},
      cargo_capacity: {value: '', disabled: true},
    })
  }
}
