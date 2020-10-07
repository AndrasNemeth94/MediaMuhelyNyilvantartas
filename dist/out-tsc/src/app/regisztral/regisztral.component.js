import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { User } from '../user';
let RegisztralComponent = class RegisztralComponent {
    constructor(signup) {
        this.signup = signup;
        this.userModel = new User('', '', '', '', '', '', '');
    }
    onSubmit() {
        /*this.array = [this.userModel.neptun,this.userModel.firstName,this.userModel.lastName,this.userModel.username,
        this.userModel.pwd,this.userModel.email,this.userModel.teamName];*/
        this.userBack = JSON.stringify(this.userModel);
        //data => console.log('Siker! ',data),
        //error =>console.log("Hiba történt.. ",error)
        this.signup.postRequest(this.userBack).subscribe(kuld => this.kuldhete = kuld, error => console.log("HIba: " + error));
        /*if(this.kuldhete == null){
    
          getKuldhet(this.kuldhete)
        }*/
    }
    ngOnInit() {
    }
};
RegisztralComponent = tslib_1.__decorate([
    Component({
        selector: 'app-regisztral',
        templateUrl: './regisztral.component.html',
        styleUrls: ['./regisztral.component.css']
    })
], RegisztralComponent);
export { RegisztralComponent };
//# sourceMappingURL=regisztral.component.js.map