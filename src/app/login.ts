interface ilogin {
    username: string;
    password: string;
    remember: boolean;
}

export class login implements ilogin {
    username = "";
    password = "";
    remember = false;

    constructor() {

    }
}
