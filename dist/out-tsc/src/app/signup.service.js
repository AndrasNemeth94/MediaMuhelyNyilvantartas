import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
/*import { HttpParameterCodec } from "@angular/common/http";
import { Serializer } from '@angular/compiler';
import { Content } from '@angular/compiler/src/render3/r3_ast';*/
let SignupService = class SignupService {
    constructor(http) {
        this.http = http;
        this.url = "http://localhost/nyilvantart/index.php";
    }
    postRequest(user) {
        //JSON.stringify(user);
        /*let headers = new HttpHeaders(
          {'Access-Control-Allow-Methods': '*'});
           let options = { headers: headers };*/
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = { headers: headers };
        return this.http.post(this.url, user, options);
    }
};
SignupService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], SignupService);
export { SignupService };
//# sourceMappingURL=signup.service.js.map