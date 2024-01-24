import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  about_info = {
    title: 'About Me',
    about: `Dedicated and reliable Junior .NET Full Stack Developer with hands-on experience designing various projects. 
    Passionate and curious about various technologies and development tools. Self-motivated and fast learner with ability to pick up new skills quickly. 
    Holds a bachelor's degree in computer engineering, successfully completed and obtained Microsoft Azure Fundamentals and CanTEK certificates. 
    Professional with creative problem-solving abilities, constantly exploring and contributing fresh and different perspectives on application development. 
    Strong organization and time management skills with ability to prioritize and multi-task. Currently enrolled in FS.NET expanding .NET, SQL and Web technologies.`,
    funny_joke: 'What do you call a lazy kangaroo? A pouch potato.'
  };
  button = 'Click here!';
  joke = false;
  onClick() {
    this.joke = !this.joke;
    this.joke ? this.button = 'Still want to see an info about me?': this.button = 'Want to see a joke instead of this?';
  } 
}

