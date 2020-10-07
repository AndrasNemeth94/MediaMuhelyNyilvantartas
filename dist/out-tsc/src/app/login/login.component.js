import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserLogin } from '../user-login';
let LoginComponent = class LoginComponent {
    constructor(login) {
        this.login = login;
        this.loginModel = new UserLogin("", "", "");
        this.ez = 1;
    }
    onSubmit() {
        console.log("ez a loginmodel (logincomponent): " + this.loginModel.username + " " + this.loginModel.pwd);
        this.login.loginRequest(this.loginModel).subscribe(data => console.log('A belépés sikeres! ', data), error => console.log("Hiba történt a belépés során! ", error));
    }
    getKuldhet(ez) {
        if (ez == null) {
            this.loginModel.kuldhete = 2;
        }
        return ez;
    }
    ngOnInit() {
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map