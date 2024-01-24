import { Component } from '@angular/core';
import { Job } from './job';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  jobs: Job[] = [
    {
      id: 1,
      name: 'Backend Developer',
      company: 'AllEvents',
      date_start: new Date(2023, 10, 1),
      date_finish: new Date(2024, 0, 24),
      description: 'made the transition to Postgress, created a module for events and wrote a tag generator for a given sequence of categories; implemented Swagger for API documentation',
    },
    {
      id: 1,
      name: 'Software Developer',
      company: 'Alkcom Inc.',
      date_start: new Date(2023, 0, 2),
      date_finish: new Date(2023, 2, 1),
      description: `Implemented a library that works with bit operations based on third-party code consisting of more than 5000 lines. 
      In two months, 2 message transfer protocols were independently implemented, supporting more than 7 transfer options`,
    },

  ];
}
