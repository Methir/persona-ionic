export class PasswordClient {
    grant_type: string = "password";
    client_id: number = 2;
    client_secret: string = "eRGvyNfszELKUEZ3wViRC8ISDVRiONrUnmJf1YJc";
    username: string;
    password: string;
    scope: string = "";

    constructor(username: string, password: string) {
        this.username = username;
        this.password =  password;
    }
}