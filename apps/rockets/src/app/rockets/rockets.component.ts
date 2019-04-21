import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { RocketsService, Rockets } from '@level/core-data';

@Component({
  selector: 'level-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.scss']
})
export class RocketsComponent implements OnInit {
  form: FormGroup;
  rockets$;
  selectedRocket: Rockets;

  constructor(
    private rocketsService: RocketsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
    this.getRockets();
    this.resetRocket();
  }

  selectRocket(rocket) {
    this.selectedRocket = rocket;
  }

  getRockets() {
    this.rockets$ = this.rocketsService.all();
  }

  resetRocket() {
    const emptyRocket = {
    rocket_name: '',
    company: '', 
    first_flight: '',
    success_rate_pct: '',
    description: ''
    }
    this.selectRocket(emptyRocket);
  }

  initForm() {
    this.form = this.formBuilder.group({
    rocket_name: {value: '', disabled: true},
    company: {value: '', disabled: true}, 
    first_flight: {value: '', disabled: true},
    success_rate_pct: {value: '', disabled: true},
    description: {value: '', disabled: true},
    });
  }

}
