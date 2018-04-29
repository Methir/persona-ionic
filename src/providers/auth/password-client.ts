export class PasswordClient {
    grant_type: string = "password";
    client_id: number = 1;
    client_secret: string = "fhEjLG1l0GmkXSDpAN4crhmC36CcF6HL88GYXYIU";
    username: string;
    password: string;
    scope: string = "";

    constructor(username: string, password: string) {
        this.username = username;
        this.password =  password;
    }
}