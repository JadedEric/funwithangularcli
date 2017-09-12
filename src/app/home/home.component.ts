import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.all();
    }

    private all() {
        this.userService.all().subscribe(users => {
            this.users = users
        });
    }
}
