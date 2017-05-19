import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'product-list',
    templateUrl: './productList.component.html',
    styleUrls: ['./productList.component.scss']
})
export class ProductListComponent implements OnInit {
    @Input() products;
    @Output() onAccountSelected  = new EventEmitter();
    
    constructor() { }

    onAccountClick (account) {
        this.onAccountSelected.emit(account);
    }

    ngOnInit() {
    }
}