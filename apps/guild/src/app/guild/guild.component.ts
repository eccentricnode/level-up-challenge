import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Observable } from 'rxjs';
import { GuildService, Guild } from '@level/core-data';

@Component({
  selector: 'level-guild',
  templateUrl: './guild.component.html',
  styleUrls: ['./guild.component.scss']
})
export class GuildComponent implements OnInit {
  form: FormGroup;
  achievements$: Observable<Guild>;
  selectedAchievement: Guild;
  resetValue = '';

  constructor(
    private formBuilder: FormBuilder,
    private guildService: GuildService,    
    ) { }

  ngOnInit() {
    this.initForm();
    this.getAchievements();
    this.resetAchievement();
  }
  
  selectAchievement(achievement: Guild) {
    this.selectedAchievement = achievement;
  }

  resetAchievement() {
    const emptyAchievement: Guild = {
      name: '',
      description: '',
      requirement: ''
    }
    this.selectAchievement(emptyAchievement);
  }

  getAchievements() {
    this.achievements$ = this.guildService.getAchievements();
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: [{value: '', disabled: true}],
      description:  [{value: '', disabled: true}],
      requirement:  [{value: '', disabled: true}],
    })
  }
}
