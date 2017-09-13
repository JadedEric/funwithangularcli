import { Component, OnInit } from '@angular/core';

import { authentication } from '../authentication';
import { employee } from '../employee';
import { user } from '../user';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    auth: authentication = new authentication();
    employees: employee[] = [];
    loggedin: user = new user();

    constructor(private userService: UserService) {
        this.auth = JSON.parse(localStorage.getItem('authentication'));
    }

    ngOnInit() {
        this.all();
        this.me();
    }

    private me() {
        this.userService.me().subscribe(output => {
            this.loggedin = output;
        });
    }

    private all() {
        this.userService.all().subscribe(output => {
            this.employees = output
        });
    }
}
