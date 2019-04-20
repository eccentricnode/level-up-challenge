import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Air, AirService } from '@level/core-data';

@Component({
  selector: 'level-air',
  templateUrl: './air.component.html',
  styleUrls: ['./air.component.scss']
})
export class AirComponent implements OnInit {
  form: FormGroup;
  airQuality$;
  selectedCity: Air;

  constructor(
    private airService: AirService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.initForm();
    this.getAirData();
    this.resetCity();
  }

  selectCity(city: Air) {
    this.selectedCity = city;
    console.log(this.selectedCity);
  }

  resetCity() {
    const emptyCity: Air = {
      city: '',
      country: '',
      locations: null,
      count: null
    }
    this.selectCity(emptyCity);
  }

  getAirData() {
    this.airQuality$ = this.airService.getAirData();
  }

  initForm() {
    this.form = this.formBuilder.group({
      city: {value: '', disabled: true},
      country: {value: '', disabled: true},
      locations: {value: '', disabled: true},
      count: {value: '', disabled: true},
    })
  }
}
