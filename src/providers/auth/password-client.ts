export class PasswordClient {
    grant_type: string = "password";
    client_id: number = 1;
    client_secret: string = "8M14KCqflWVzlbiqeIf7153Vp31Q09QDee8eFvYL";
    username: string;
    password: string;
    scope: string = "";

    constructor(username: string, password: string) {
        this.username = username;
        this.password =  password;
    }
}