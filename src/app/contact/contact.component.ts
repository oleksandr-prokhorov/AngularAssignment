import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact_info = {
    address: '123 Downtown, Toronto, ON, Canada',
    phone: '+1 234 567 9545',
    email: 'oleksandr@gmail.com'
  }
}
