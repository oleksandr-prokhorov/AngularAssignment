import { Component } from '@angular/core';
import { Skill } from './skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      id: 1,
      name: '.NET',
      skillRating: 80,
      description: '.NET and frameworks (ASP.NET, RazorPages)',
    },
    {
      id: 2,
      name: 'Python',
      skillRating: 60,
      description: 'Python and frameworks (Flask, Django)',
    },
    {
      id: 3,
      name: 'Web',
      skillRating: 60,
      description: 'HTML5, CSS3, JavaScript, Angular',
    },
    {
      id: 4,
      name: 'Testing',
      skillRating: 50,
      description: 'Testing.',
    },
  ];
  handleSelect(skill: Skill) {
    console.log('Selected', skill.name);
  }
}
