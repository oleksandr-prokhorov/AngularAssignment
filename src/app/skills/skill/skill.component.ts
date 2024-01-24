import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { Skill } from '../skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {
  @Input() skill!: Skill;
  @Output() onSelect = new EventEmitter<Skill>();

  select() {
    this.onSelect.emit(this.skill);
  }
}
