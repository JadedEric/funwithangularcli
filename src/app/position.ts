interface iposition {
    id: number;
    level: string;
    name: string;
    sort: number;
}

export class position implements iposition {
    id = 0;
    level = "";
    name = "";
    sort = 0;
}
