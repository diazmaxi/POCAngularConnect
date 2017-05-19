import { Component, OnInit, Input } from '@angular/core';
import { AccountService, AccountTransactionsRequest } from '../../../services/account.service'

@Component({
    selector: 'recent-transactions',
    templateUrl: './recentTransaction.component.html',
    styleUrls: ['./recentTransaction.component.scss'],
    providers: [AccountService]
})
export class RecentTransactionsComponent implements OnInit {
    @Input() account;
    @Input('user') currentUser;
    recentTransactions;
    
    constructor (private accountService: AccountService) { }

    ngOnInit () { 
        console.log('RECENT TRANSACTION', this.currentUser)
        const request = new AccountTransactionsRequest({
            user: this.currentUser,
            accountId: this.account.acctNumber,
            numberOfTransactions: "10",
            userAction: 'FIRST'
        })
        this.recentTransactions = this.accountService.getAccountTransactions(request);
    }
}