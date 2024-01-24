import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import {Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isPhonePortrait = false;
  
  constructor(private responsive: BreakpointObserver) {

  }
  ngOnInit() {
    this.responsive.observe([
      Breakpoints.TabletPortrait,
      Breakpoints.HandsetLandscape,
      Breakpoints.Handset,
      Breakpoints.Tablet
    ])
      .subscribe(result => {

        this.isPhonePortrait = false; 

        if (result.matches) {
          this.isPhonePortrait = true;
        }

  });
  }
}
