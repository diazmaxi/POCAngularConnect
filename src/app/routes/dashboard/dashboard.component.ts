import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStorage } from '../../utils/appStorage'
import { DashboardService } from '../../services/dashboard.service'

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
    currentUser;
    accounts;
    
    constructor (private dashboardService: DashboardService, private router: Router) { }

    onAccountSelected (account) {
        AppStorage.setItem('selectedAccount', account);
        this.router.navigateByUrl('/account/' + account.acctNumber)
    }

    ngOnInit() {
        this.currentUser = AppStorage.getItem('loginInfo')
        this.accounts = this.dashboardService.getAccounts(this.currentUser)
    }
}