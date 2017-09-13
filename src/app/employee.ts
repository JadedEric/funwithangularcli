import { position } from './position';
import { user } from './user';

interface iemployee {
    age: number;
    birth_date: string;
    days_to_birthday: number;
    email: string;
    gender: string;
    github_user: string;
    phone_number: string;
    position: position;
    user: user;
    years_worked: number;
}

export class employee implements iemployee {
    age = 0;
    birth_date = "";
    days_to_birthday = 0;
    email = "";
    gender = "";
    github_user = "";
    phone_number = "";
    position = new position();
    user = new user();
    years_worked = 0;
}
