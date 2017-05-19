import { Component, OnInit } from '@angular/core';
import { AppStorage } from '../../utils/appStorage'

@Component({
    selector: 'account-detail',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountDetailComponent implements OnInit {
    account;
    currentUser;

    constructor() { }

    ngOnInit() { 
        this.currentUser = AppStorage.getItem('loginInfo').user
        this.account = AppStorage.getItem('selectedAccount')
        console.log(this.account)
    }
}