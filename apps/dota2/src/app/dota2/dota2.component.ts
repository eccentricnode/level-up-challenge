import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Dota2Service, Dota2 } from '@level/core-data';

@Component({
  selector: 'level-dota2',
  templateUrl: './dota2.component.html',
  styleUrls: ['./dota2.component.scss']
})
export class Dota2Component implements OnInit {
  form: FormGroup;
  teams$;
  selectedTeam: Dota2;

  constructor(
    private dota2Service: Dota2Service,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
    this.getTeams();
    this.resetTeam();
  }
  
  selectTeam(team) {
    this.selectedTeam = team;
  }

  getTeams() {
    this.teams$ = this.dota2Service.all();
  }

  resetTeam() {
    const emptyTeam = {
      name: '',
      wins: null, 
      losses: null, 
      rating: null,
    }
    this.selectTeam(emptyTeam);
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: {value: '', disabled: true},
      wins: {value: '', disabled: true},
      losses: {value: '', disabled: true},
      rating: {value: '', disabled: true},
    });
  }
}
