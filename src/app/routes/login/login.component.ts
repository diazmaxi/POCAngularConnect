import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service'
import { AppStorage } from '../../utils/appStorage'

@Component({
    selector: 'selector',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [LoginService]
})
export class LoginComponent implements OnInit {
    user;
    password;

    constructor(private loginService: LoginService, private router: Router) { }

    login (e) {
        e.preventDefault();
        this.loginService.login(this.user, this.password)
                         .subscribe(response => {
                             console.log(response)
                             AppStorage.setItem('loginInfo', {
                                 user: this.user,
                                 password: this.password
                             })
                             this.router.navigateByUrl('/dashboard')
                         });
    }

    ngOnInit() { }
}