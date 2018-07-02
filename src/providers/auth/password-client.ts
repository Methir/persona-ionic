export class PasswordClient {
    grant_type: string = "password";
    client_id: number = 2;
    client_secret: string = "fyx64eSWW8oqBpGANYD3dzSl1iI3fGwe5Lq3Kl8i";

    username: string;
    password: string;
    scope: string = "";

    constructor(username: string, password: string) {
        this.username = username;
        this.password =  password;
    }
}