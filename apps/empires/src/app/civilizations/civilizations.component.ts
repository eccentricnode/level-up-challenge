import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Empires, EmpiresService } from '@level/core-data';

@Component({
  selector: 'level-civilizations',
  templateUrl: './civilizations.component.html',
  styleUrls: ['./civilizations.component.scss']
})
export class CivilizationsComponent implements OnInit {
  form: FormGroup;
  civilizations$;
  selectedCivilization: Empires;

  constructor(
    private empiresService: EmpiresService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
    this.getCivilizations();
    this.resetCivilzation();
  }

  getCivilizations() {
    this.civilizations$ = this.empiresService.all();
  }

  selectCivilization(civilization: Empires) {
    this.selectedCivilization = civilization;
  }

  resetCivilzation() {
    const emptyCivilization: Empires = {
      name: '',
      expansion: '',
      army_type: '',
      unique_unit: '',
      unique_tech: '',
      team_bonus: '',
      civilization_bonus: null,
    }
    this.selectCivilization(emptyCivilization);
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: {value: '', disabled: true},
      expansion: {value: '', disabled: true},
      army_type: {value: '', disabled: true},
      unique_unit: {value: '', disabled: true},
      unique_tech: {value: '', disabled: true},
      team_bonus: {value: '', disabled: true},
      civilization_bonus: {value: '', disabled: true},
    });
  }
}
