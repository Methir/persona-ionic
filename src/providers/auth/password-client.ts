export class PasswordClient {
    grant_type: string = "password";
    client_id: number = 1;
    client_secret: string = "EzEb1jZm28CIaQ8h7Q8pJW3XPCqsjQ8UwLO1TxlW";
    username: string;
    password: string;
    scope: string = "";

    constructor(username: string, password: string) {
        this.username = username;
        this.password =  password;
    }
}