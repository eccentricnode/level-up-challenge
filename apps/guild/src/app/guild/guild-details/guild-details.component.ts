import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Guild } from '@level/core-data';

@Component({
  selector: 'level-guild-details',
  templateUrl: './guild-details.component.html',
  styleUrls: ['./guild-details.component.scss']
})
export class GuildDetailsComponent {
  @Input() group: FormGroup;
  @Output() reset = new EventEmitter();

  @Input() set selectedAchievement(value: Guild) {
    this.group.patchValue({
      name: value.name,
      description: value.description,
      requirement: value.requirement
    });
  }

  resetAchievementForm() {
    this.reset.emit();
  }
}
