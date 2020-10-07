import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.url = "http://localhost/nyilvantart/index2.php";
    }
    loginRequest(login) {
        console.log("ezt dobja a loginservice: " + login.username + " " + login.pwd);
        return this.http.post(this.url, login);
    }
};
LoginService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], LoginService);
export { LoginService };
//# sourceMappingURL=login.service.js.map