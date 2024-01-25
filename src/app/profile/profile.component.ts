import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profile = {
    name: 'Oleksandr Prokhorov',
    description: 'Student, software developer, history enthusiast',
    image: 'assets/me.jpg'
  }
}
