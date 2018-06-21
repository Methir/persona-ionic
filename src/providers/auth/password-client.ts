export class PasswordClient {
    grant_type: string = "password";
    client_id: number = 2;
    client_secret: string = "U51qMa0lxyejOOMbP11ZfXpssBIiNxAsYdad8v23";
    username: string;
    password: string;
    scope: string = "";

    constructor(username: string, password: string) {
        this.username = username;
        this.password =  password;
    }
}