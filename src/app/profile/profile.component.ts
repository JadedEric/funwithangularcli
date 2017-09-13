import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    currentUser: User;
    user: User;

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.me();
    }

    private me() {
        this.userService.me().subscribe(me => {
            debugger;
            this.user = me;
        });
    }
}
