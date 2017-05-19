import { Component, Input } from '@angular/core';

@Component ({
    selector: 'custom-navbar',
    templateUrl: './customNavbar.component.html',
    styleUrls: ['./customNavbar.component.css']
})
export class CustomNavbarComponent {
    @Input() menuItems;

    setMenuItems (items) {
        this.menuItems = items;
    }

    addMenuItem (item) {
        this.menuItems.push(item)
    }

    getMenuItems () {
        return this.menuItems
    }
}