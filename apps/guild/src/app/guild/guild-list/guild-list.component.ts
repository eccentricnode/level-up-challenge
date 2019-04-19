import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Guild } from '@level/core-data';

@Component({
  selector: 'level-guild-list',
  templateUrl: './guild-list.component.html',
  styleUrls: ['./guild-list.component.scss']
})
export class GuildListComponent {
  @Input() achievements: Guild;
  @Output() selected = new EventEmitter();

  selectAchievement(achievement: Guild) {
    this.selected.emit(achievement);
  }
}
