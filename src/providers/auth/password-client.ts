export class PasswordClient {
    grant_type: string = "password";
    client_id: number = 1;
    client_secret: string = "R10PojjOE0vV7nj6pM3MXMeXWnwC52365hGmpsWy";
    username: string;
    password: string;
    scope: string = "";

    constructor(username: string, password: string) {
        this.username = username;
        this.password =  password;
    }
}