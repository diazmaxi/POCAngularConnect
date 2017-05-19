import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
    selector: 'logout-button',
    template: `
        <button class="logout-btn" (click)="logout()">
            <ng-content></ng-content>
        <button>
    `,
    styleUrls: ['./logoutButton.component.scss'],
    providers: [LoginService]
})
export class LogoutButtonComponent implements OnInit {
    @Input() user;
    @Input() redirectTo = '/login';

    constructor(private loginService: LoginService, private router: Router) { }

    logout () {
        this.loginService.logout(this.user.user, this.user.password ).subscribe();
        this.router.navigate([this.redirectTo]);
    }

    ngOnInit() { }
}