import { Component, OnInit } from '@angular/core';

import { user } from '../user';
import { authentication } from '../authentication';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    auth: authentication = new authentication();
    model: user = new user();

    constructor(private userService: UserService) {
        this.auth = JSON.parse(localStorage.getItem('authentication'));
    }

    ngOnInit() {
        this.me();
    }

    private me() {
        this.userService.me().subscribe(output => {
            this.model = output;
        });
    }
}
