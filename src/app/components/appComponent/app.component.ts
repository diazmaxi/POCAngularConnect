import { Component } from '@angular/core';

import NavbarConfig from '../../config/navbar.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  menuItems;

  constructor () {
    this.menuItems = NavbarConfig.menuItems;
  }
}
