(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbarcomp></app-navbarcomp>\n\n<body>\n    <div class='container-fluid'>\n      <p>Üdvözlünk a Médiaműhely felületén!</p>\n    </div>\n    </body>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/diakok/diakok.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/diakok/diakok.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbarcomp></app-navbarcomp>\n\n<!--PANEL-------------------------->\n<div class=\"md-form\">\n  <button name='hozzaad' id='hozBtn'(click)='showMe()' class='btn btn-primary'><img class='clk-pic' src='../../../assets/img/plusz.png'></button> \n </div>\n\n<!--HOZZÁADÁS--------------------->\n<div class='cont-panel'[hidden]='display'>\n  <form  #modosit ='ngForm' novalidate>\n    <div class=\"form-group\">\n      <label for='neptun'>Neptunkód:</label>\n      <input type=\"text\" name=\"neptun\" class=\"form-control\" required pattern=\"[0-9a-zA-Z]{6,6}\"\n      placeholder='kérem írja be a hozzáadni kívánt neptun kódot!'(focusout)='nepSave($event)'>\n\n    \n </div>\n  <button name='mentes' id='mentes' (click)='ujDiak()' class='btn btn-primary'[disabled]=\"modosit.form.invalid\">Mentés</button>\n</form>\n</div>\n\n\n\n<!--TÁBLÁZAT---------------------->\n<div class='container-fluid'>\n <table class='table table-dark'>\n  <thead>\n    <th>{{diakHead[0]}}</th>\n    <th>{{diakHead[1]}}</th>\n    <th>{{diakHead[2]}}</th>\n    <th>{{diakHead[3]}}</th>\n    <th>{{diakHead[4]}}</th>\n    <th>{{diakHead[5]}}</th>\n    </thead>\n\n    <tr *ngFor='let user of diak'>\n      \n\n      <td *ngIf='editId === user.id'><input class='szerk' type='text' [(ngModel)]='user.neptun'></td>\n      <td *ngIf='editId !== user.id'>{{user.neptun}}</td>\n\n      <td *ngIf='editId === user.id'><input class='szerk' type='text' [(ngModel)]='user.firstName'></td>\n      <td *ngIf='editId !== user.id'>{{user.firstName}}</td>\n\n      <td *ngIf='editId === user.id'><input class='szerk' type='text' [(ngModel)]='user.lastName'></td>\n      <td *ngIf='editId !== user.id'>{{user.lastName}}</td>\n\n      <td *ngIf='editId === user.id'><input class='szerk' type='text' [(ngModel)]='user.pwd'></td>\n      <td *ngIf='editId !== user.id'>{{user.pwd}}</td>\n\n      <td *ngIf='editId === user.id'><input class='szerk' type='text' [(ngModel)]='user.username'></td>\n      <td *ngIf='editId !== user.id'>{{user.username}}</td>\n\n      <td *ngIf='editId === user.id'><input class='szerk' type='text' [(ngModel)]='user.teamName'></td>\n      <td *ngIf='editId !== user.id'>{{user.teamName}}</td>\n\n      <td *ngIf='!(i==0)'><button id='mod'class='btn btn-warning' value='{{user.id}}' (click)='Mod(user.id)'>\n        <img src=\"../../../assets/img/modosit.svg\" width=\"15\" />\n      </button></td>\n      <td *ngIf='!(i==0)'><button id='sav'class='btn btn-success' value='{{user.id}}' (click)='Save(user)'>\n        <img src=\"../../../assets/img/save.png\" width=\"15\" />\n      </button></td>\n      <td *ngIf='!(i==0)'><button id='del'class='btn btn-danger' value='{{user.id}}' (click)='Del(user.id)'>\n        <img src=\"../../../assets/img/bezar.png\" width=\"15\" />\n      </button></td>\n      </tr>\n\n  </table>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/diakok/diakszerk/diakszerk.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/diakok/diakszerk/diakszerk.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='container-fluid'>\n    <form #szerkForm=\"ngForm\">\n        <div class=\"row\">\n            <div class=\"col col-6 col-md-8 col-lg-12\">\n        \n                <div class=\"form-group\">\n                <label for=\"neptunkod\">Neptun kód:</label>\n                <input name=\"neptun\" type=\"text\" class=\"form-control\" pattern=\"[0-9a-zA-Z]{6,6}\" required #neptun=\"ngModel\" \n                [class.is-valid]=\"neptun.valid && neptun.touched\" [class.is-invalid]=\"neptun.invalid && neptun.touched\" \n                placeholder=\"...\" [(ngModel)]=\"szerkModel.neptun\">\n                <!--HIBAÜZENETEK-->\n                  <div [class.d-none]=\"neptun.valid ||neptun.untouched\" *ngIf=\"neptun.errors\">\n                  <small class=\"text-danger\" *ngIf=\"neptun.errors.required\">Kérem írja be a NEPTUN kódot!</small>\n                  <small class=\"text-danger\" *ngIf=\"neptun.errors.pattern\">6 karakter szükséges!</small>\n                  </div>\n        \n                </div>\n            </div>\n        </div>\n        \n        <div class=\"row\">\n            <div class=\"col col-6 col-md-8 col-lg-12\">\n            <div class=\"form-group\">\n              <label for=\"firstName\">Keresztnév:</label>\n              <input name=\"firstName\" type=\"text\" class=\"form-control\" required #firstName=\"ngModel\" \n              [class.is-valid]=\"firstName.valid && firstName.touched\" [class.is-invalid]=\"firstName.invalid && firstName.touched\" \n              placeholder=\"...\" [(ngModel)]=\"szerkModel.firstName\">\n              <!--HIBAÜZENETEK-->\n              <small class=\"text-danger\" [class.d-none] =\"firstName.valid || firstName.untouched\">Kérdem adja meg a keresztnevét!</small>\n            </div>\n        </div>\n        </div>\n        \n        <div class=\"row\">\n            <div class=\"col col-6 col-md-8 col-lg-12\">\n            <div class=\"form-group\">\n              <label for=\"lastName\">Vezetéknév:</label>\n              <input name=\"lastName\" type=\"text\" class=\"form-control\" required #lastName=\"ngModel\" \n              [class.is-valid]=\"lastName.valid && lastName.touched\" [class.is-invalid]=\"lastName.invalid &&lastName.touched\" \n              placeholder=\"...\" [(ngModel)]=\"szerkModel.lastName\">\n              <!--HIBAÜZENETEK-->\n              <small class=\"text-danger\" [class.d-none] =\"lastName.valid || lastName.untouched\">Kérdem adja meg a vezetéknevét!</small>\n            </div>\n        </div>\n        </div>\n        \n        <div class=\"row\">\n            <div class=\"col col-6 col-md-8 col-lg-12\">\n            <div class=\"form-group\">\n              <label for=\"username\">Felhasználónév:</label>\n              <input name=\"username\" type=\"text\" class=\"form-control\" pattern=\"[0-9a-zA-Z]{4,10}\" required #username=\"ngModel\" \n              [class.is-valid]=\"username.valid && username.touched\" [class.is-invalid]=\"username.invalid && username.touched\" \n              placeholder=\"...\" [(ngModel)]=\"szerkModel.username\">\n        \n               <!--HIBAÜZENETEK-->\n               <div [class.d-none]=\"username.valid ||username.untouched\" *ngIf=\"username.errors\">\n                <small class=\"text-danger\" *ngIf=\"username.errors.required\">Kérem adja meg a felhasználónevet!</small>\n                <small class=\"text-danger\" *ngIf=\"username.errors.pattern\">Minimum 4, maximum 10 karakter!</small>\n                </div>\n        \n            </div>\n        </div>\n        </div>\n        \n        <div class=\"row\">\n            <div class=\"col col-6 col-md-8 col-lg-12\">\n            <div class=\"form-group\">\n                <label for=\"pwd\">Jelszó:</label>\n                <input name=\"pwd\" type=\"password\" class=\"form-control\" pattern=\"[0-9a-zA-Z]{8,8}\" required #pwd=\"ngModel\" \n                [class.is-valid]=\"pwd.valid && pwd.touched\" [class.is-invalid]=\"pwd.invalid && pwd.touched\" \n                placeholder=\"***\" [(ngModel)]=\"szerkModel.pwd\">\n        \n                 <!--HIBAÜZENETEK-->\n                 <div [class.d-none]=\"pwd.valid ||pwd.untouched\" *ngIf=\"pwd.errors\">\n                  <small class=\"text-danger\" *ngIf=\"pwd.errors.required\">Kérem adja meg a jelszavát!</small>\n                  <small class=\"text-danger\" *ngIf=\"pwd.errors.pattern\">8 karakter szükséges!</small>\n                  </div>\n        \n              </div>\n            </div>\n        </div>\n        \n        <div class=\"row\">\n            <div class=\"col col-6 col-md-8 col-lg-12\">\n              <div class=\"form-group\">\n                <label for=\"email\">Email:</label>\n                <input name=\"email\" type=\"email\" class=\"form-control\" required #email=\"ngModel\" \n                [class.is-valid]=\"email.valid && email.touched\" [class.is-invalid]=\"email.invalid && email.touched\" \n                placeholder=\"...\" [(ngModel)]=\"szerkModel.email\">\n                <!--HIBAÜZENETEK-->\n              <small class=\"text-danger\" [class.d-none] =\"email.valid || email.untouched\">Kérdem adja meg az e-mail címét!</small>\n              </div>\n            </div>\n        </div>\n        \n        <div class=\"row\">\n            <div class=\"col col-6 col-md-8 col-lg-12\">\n              <div class=\"form-group\">\n                <label for=\"teamName\">Csapatnév:</label>\n                <input name=\"teamName\" type=\"text\" class=\"form-control\" required #teamName=\"ngModel\" \n                [class.is-valid]=\"teamName.valid && teamName.touched\" [class.is-invalid]=\"teamName.invalid && teamName.touched\" \n                placeholder=\"...\" [(ngModel)]=\"szerkModel.teamName\">\n                <!--HIBAÜZENETEK-->\n              <small class=\"text-danger\" [class.d-none] =\"teamName.valid || teamName.untouched\">Kérdem adja meg a csapata nevét!</small>\n              </div>\n            </div>\n        </div>\n        \n        <div class='row'>\n            <div class=\"col col-6 col-md-8 col-lg-12\">\n            <button type=\"submit\" [disabled]=\"szerkForm.form.invalid\" name=\"submit\" value=\"Submit\" class=\"btn btn-light\">Regisztrál</button>\n            <button id='back' class='btn btn-light' [routerLink]=\"['/diakok']\">Vissza</button>\n            </div>\n        </div>\n          </form>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/igenyles/igenyles.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/igenyles/igenyles.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbarcomp></app-navbarcomp>\n\n<div class='wrap'>\n<div class='container'>\n    <table class='table table-dark'>\n        <thead>\n            <!--<th>{{igenyHead[0]}}</th>-->\n            <th>{{igenyHead[0]}}</th>\n            <th>{{igenyHead[1]}}</th>\n            <th>{{igenyHead[2]}}</th>\n            <th>{{igenyHead[3]}}</th>\n            <th>{{igenyHead[4]}}</th>\n            <th>{{igenyHead[5]}}</th>\n        </thead>\n\n        <tr *ngFor ='let i of igenyArr'>\n\n            <!--<td *ngIf='editId === i.igeny_id && !(i==0)'><input class='szerk' type='text' [(ngModel)]='i.igeny_id'></td>\n            <td *ngIf='editId !== i.igeny_id'>{{i.igeny_id}}</td>-->\n\n            <td *ngIf='editId === i.igeny_id && !(i==0)'><input class='szerk' type='text' [(ngModel)]='i.igenyelt_targy'></td>\n            <td *ngIf='editId !== i.igeny_id'>{{i.igenyelt_targy}}</td>\n            \n            <!--<td *ngIf='editId === i.igeny_id && !(i==0)'><input class='szerk' type='text' [(ngModel)]='i.targy_id'></td>\n            <td *ngIf='editId !== i.igeny_id'>{{i.targy_id}}</td>-->\n\n            <td *ngIf='editId === i.igeny_id && !(i==0)'><input class='szerk' type='text' [(ngModel)]='i.targy_mennyiseg'></td>\n            <td *ngIf='editId !== i.igeny_id'>{{i.targy_mennyiseg}}</td>\n\n            <td *ngIf='editId === i.igeny_id && !(i==0)'><input class='szerk' type='text' [(ngModel)]='i.igeny_idopont'></td>\n            <td *ngIf='editId !== i.igeny_id'>{{i.igeny_idopont}}</td>\n\n            <td *ngIf='editId === i.igeny_id && !(i==0)'><input class='szerk' type='text' [(ngModel)]='i.igeny_vege'></td>\n            <td *ngIf='editId !== i.igeny_id'>{{i.igeny_vege}}</td>\n\n            <td *ngIf='editId === i.igeny_id && !(i==0)'><input class='szerk' type='text' [(ngModel)]='i.igenylo'></td>\n            <td *ngIf='editId !== i.igeny_id'>{{i.igenylo}}</td>\n\n            <td *ngIf='editId === i.igeny_id && !(i==0)'><input class='szerk' type='text' [(ngModel)]='i.elbiralt'></td>\n            <td *ngIf='editId !== i.igeny_id'>{{i.elbiralt}}</td>\n\n            <td *ngIf='!(i==0)'><button id='mod'class='btn btn-warning' value='{{i.igeny_id}}' (click)='Mod(i.igeny_id)'>\n                <img src=\"../../../assets/img/modosit.svg\" width=\"15\" />\n            </button></td>\n            <td *ngIf='!(i==0)'><button id='sav'class='btn btn-success' value='{{i.igeny_id}}' (click)='Save(i)'>\n                <img src=\"../../../assets/img/save.png\" width=\"15\" />\n            </button></td>\n            <td *ngIf='!(i==0)'><button id='del'class='btn btn-danger' value='{{i.igeny_id}}' (click)='Del(i.igeny_id)'>\n                <img src=\"../../../assets/img/bezar.png\" width=\"15\" />\n            </button></td>\n\n        </tr>\n    </table>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/targyak/targyak.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/targyak/targyak.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbarcomp></app-navbarcomp>\n\n\n<!--PANEL-------------------------->\n<div class=\"md-form\">\n   <button name='hozzaad' id='hozBtn'(click)='showMe()' class='btn btn-primary'><img class='clk-pic' src='../../../assets/img/plusz.png'></button> \n  </div>\n\n<!--HOZZÁADÁS--------------------->\n<div class='cont-panel' [hidden]='display'>\n<form id=\"targyhozzad\" #targyModel=\"ngForm\" novalidate>\n\n    <div class='form-group'>\n        <label for='targy_marka'>márka:</label>\n        <input id='marka' type='text' class='form-control' name='marka' pattern=\"^([0-9]*[a-zA-Z]){3,}[0-9]*$\" [(ngModel)]=\"ujTargy.marka\" required #marka=\"ngModel\"\n        [class.is-valid]=\"marka.valid && marka.touched\" [class.is-invalid]=\"marka.invalid && marka.touched\" \n        placeholder=\"...\" [(ngModel)]=\"ujTargy.marka\">\n\n         <!--HIBAÜZENETEK MÁRKA-->\n       <div [class.d-none]=\"marka.valid ||marka.untouched\" *ngIf=\"marka.errors\">\n        <small class=\"text-danger\" *ngIf=\"marka.errors.required\">Kérem adja meg a márkát!</small>\n        <small class=\"text-danger\" *ngIf=\"marka.errors.pattern\">Minimum 3 ABC karakter!</small>\n        </div>\n    </div>\n\n    <div class='form-group'>\n        <label for='targy_tipus'>típus:</label>\n        <input id='tipus' type='text' class='form-control' name='tipus' pattern=\"^([0-9]*[a-zA-Z]){3,}[0-9]*$\" \n        [(ngModel)]=\"ujTargy.tipus\" required #tipus=\"ngModel\" [class.is-valid]=\"tipus.valid && tipus.touched\" \n        [class.is-invalid]=\"tipus.invalid && tipus.touched\" placeholder=\"...\" [(ngModel)]=\"ujTargy.tipus\">\n\n          <!--HIBAÜZENETEK TÍPUS-->\n       <div [class.d-none]=\"tipus.valid ||tipus.untouched\" *ngIf=\"tipus.errors\">\n        <small class=\"text-danger\" *ngIf=\"tipus.errors.required\">Kérem adja meg a típust!</small>\n        <small class=\"text-danger\" *ngIf=\"tipus.errors.pattern\">Minimum 3 ABC karakter!</small>\n        </div>\n    </div>\n\n    <div class='form-group'>\n        <label for='targy_db'>darabszám:</label>\n        <input id='db' type='number' class='form-control' name='db' pattern='^[1-9][0-9]*$' [(ngModel)]=\"ujTargy.db\" \n        required #db=\"ngModel\" [class.is-valid]=\"db.valid && db.touched\" [class.is-invalid]=\"db.invalid && db.touched\" \n        placeholder=\"...\" [(ngModel)]=\"ujTargy.db\">\n\n        <!--HIBAÜZENETEK DARABSZÁM-->\n       <div [class.d-none]=\"db.valid ||db.untouched\" *ngIf=\"db.errors\">\n        <small class=\"text-danger\" *ngIf=\"db.errors.required\">Kérem adja meg a darabszámot!</small>\n        <small class=\"text-danger\" *ngIf=\"db.errors.pattern\">A számnak 0-nál nagyobbnak kell lennie!</small>\n        </div>\n    </div>\n\n    <div class='form-group'>\n        <label for='targy_elerheto'>elérhető:</label>\n            <div *ngFor='let i of igen_nem'>\n                <input type=\"radio\"\n                name='eler'\n                value='{{i}}'\n                (change) = \"valaszValt($event)\"\n                [(ngModel)]='ujTargy.eler'>\n                <i>{{i}}</i>\n                </div>\n    </div>\n\n    <button class='btn btn-primary' [disabled]=\"targyModel.form.invalid\" (click)='targyHozza()'>Mentés</button>\n    </form>\n    </div>\n\n<div class='container-fluid'>\n    <table class='table table-dark'>\n        <thead>\n            <th>{{targyHead[0]}}</th>\n            <th>{{targyHead[1]}}</th>\n            <th>{{targyHead[2]}}</th>\n            <th>{{targyHead[3]}}</th>\n            <th>{{targyHead[4]}}</th>\n        </thead>\n\n        <tr *ngFor ='let i of targyak'>\n\n            <td *ngIf='editId === i.targy_id && !(i==0)'><input class='szerk' type='text' [(ngModel)]='i.targy_id'></td>\n            <td *ngIf='editId !== i.targy_id'>{{i.targy_id}}</td>\n\n            <td *ngIf='editId === i.targy_id && !(i==0)'><input class='szerk' type='text' [(ngModel)]='i.targy_marka'></td>\n            <td *ngIf='editId !== i.targy_id'>{{i.targy_marka}}</td>\n            \n            <td *ngIf='editId === i.targy_id && !(i==0)'><input class='szerk' type='text' [(ngModel)]='i.targy_tipus'></td>\n            <td *ngIf='editId !== i.targy_id'>{{i.targy_tipus}}</td>\n\n            <td *ngIf='editId === i.targy_id && !(i==0)'><input class='szerk' type='text' [(ngModel)]='i.targy_db'></td>\n            <td *ngIf='editId !== i.targy_id'>{{i.targy_db}}</td>\n\n            <td *ngIf='editId === i.targy_id && !(i==0)'><input class='szerk' type='text' [(ngModel)]='i.targy_elerheto'></td>\n            <td *ngIf='editId !== i.targy_id'>{{i.targy_elerheto}}</td>\n\n            <td *ngIf='!(i==0)'><button id='mod'class='btn btn-warning' value='{{i.targy_id}}' (click)='Mod(i.targy_id)'>\n                <img src=\"../../../assets/img/modosit.svg\" width=\"15\" />\n            </button></td>\n            <td *ngIf='!(i==0)'><button id='sav'class='btn btn-success' value='{{i.targy_id}}' (click)='Save(i)'>\n                <img src=\"../../../assets/img/save.png\" width=\"15\" />\n            </button></td>\n            <td *ngIf='!(i==0)'><button id='del'class='btn btn-danger' value='{{i.targy_id}}' (click)='Del(i.targy_id)'>\n                <img src=\"../../../assets/img/bezar.png\" width=\"15\" />\n            </button></td>\n        </tr>\n    </table>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='container-fluid'>\n<router-outlet></router-outlet>\n<!--<app-login></app-login>-->\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container-fluid\">\n<!--row 1------------------->\n<div class=\"row\">\n    <div id='logo' class=\"col col-lg-12 col-6\" id=\"logo\">\n      <img src='../../assets/img/logo.png'>\n    </div>\n  </div>\n<!--row 1------------------->\n\n<form  #loginForm =\"ngForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\n  <!--row 2------------------->\n    <div class=\"row\">\n\n      <div class=\"col col-lg-12 col-6\">\n        <div class=\"form-group\">\n          <label for=\"username\">Felhasználónév:</label>\n          <input name=\"username\" type=\"text\" class=\"form-control\" pattern=\"[0-9a-zA-Z]{4,10}\" required #username=\"ngModel\" \n          [class.is-valid]=\"username.valid && username.touched\" [class.is-invalid]=\"username.invalid && username.touched\" \n          placeholder=\"...\" [(ngModel)]=\"loginModel.username\">\n\n       <!--HIBAÜZENETEK-->\n       <div [class.d-none]=\"username.valid ||username.untouched\" *ngIf=\"username.errors\">\n        <small class=\"text-danger\" *ngIf=\"username.errors.required\">Kérem adja meg a felhasználónevet!</small>\n        <small class=\"text-danger\" *ngIf=\"username.errors.pattern\">Minimum 4, maximum 10 karakter!</small>\n        </div>\n          </div>\n      </div>\n  </div>\n  <!--row 2------------------->\n    \n  <!--row 3------------------->\n    <div class=\"row\">\n\n      <div class=\"col col-lg-12 col-6\">\n          <div class=\"form-group\">\n          <label for=\"pwd\">Jelszó:</label>\n          <input name=\"pwd\" type=\"password\" class=\"form-control\" pattern=\"[0-9a-zA-Z]{8,8}\" required #pwd=\"ngModel\" \n          [class.is-valid]=\"pwd.valid && pwd.touched\" [class.is-invalid]=\"pwd.invalid && pwd.touched\" \n          placeholder=\"***\" [(ngModel)]=\"loginModel.pwd\">\n\n         <!--HIBAÜZENETEK-->\n         <div [class.d-none]=\"pwd.valid ||pwd.untouched\" *ngIf=\"pwd.errors\">\n          <small class=\"text-danger\" *ngIf=\"pwd.errors.required\">Kérem adja meg a jelszavát!</small>\n          <small class=\"text-danger\" *ngIf=\"pwd.errors.pattern\">8 karakter szükséges!</small>\n          </div>\n\n          </div>\n        </div>\n    </div>\n\n      <!--row 4------------------->\n      <div class=\"row\">\n        <div class=\"col col-lg-12 col-6\">\n          <button type=\"submit\" [disabled]=\"loginForm.form.invalid\" name=\"submit\" value=\"Submit\" class=\"btn btn-primary btn-xs-2\">Belépés</button>\n            <!--<button type=\"submit\" class=\"btn btn-primary btn-xs-2\">Belépés</button>-->\n          </div>\n      </div>\n    <!--row 4------------------->\n    \n    <!--SIKERES REGELÉS---------------------------->\n    <!--<div class=\"col col-lg-12 col-6\" [class.d-none] = \"kuldhete.value !=2\" id=\"kuld\">\n      <div class=\"form-group\">\n      <p>Sikeres Regisztráció, kérem lépjen be</p>\n      <input class=\"text-success\" type=\"number\" name='kuldhete' id=\"kuldhete\"[(ngModel)]='loginModel.kuldhete'>\n      </div>\n    </div>-->\n\n  </form>\n   <!--row 3------------------->\n\n\n\n  <!--row 5------------------->\n    <div class=\"row\">\n      <div class=\"col col-lg-12 col-6\">\n          <button [routerLink]=\"['/regisztral']\" class=\"btn btn-link btn-xs-2\">Regisztáció</button>\n          </div>\n    </div>\n\n  <!--row 5------------------->\n  \n</div> \n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/regisztral/regisztral.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/regisztral/regisztral.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class='container-fluid'>\n\n<form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n<div class=\"row\">\n    <div class=\"col col-6 col-md-8 col-lg-12\">\n\n        <div class=\"form-group\">\n        <label for=\"neptunkod\">Neptun kód:</label>\n        <input name=\"neptun\" type=\"text\" class=\"form-control\" pattern=\"[0-9a-zA-Z]{6,6}\" required #neptun=\"ngModel\" \n        [class.is-valid]=\"neptun.valid && neptun.touched\" [class.is-invalid]=\"neptun.invalid && neptun.touched\" \n        placeholder=\"...\" [(ngModel)]=\"userModel.neptun\">\n        <!--HIBAÜZENETEK-->\n          <div [class.d-none]=\"neptun.valid ||neptun.untouched\" *ngIf=\"neptun.errors\">\n          <small class=\"text-danger\" *ngIf=\"neptun.errors.required\">Kérem írja be a NEPTUN kódot!</small>\n          <small class=\"text-danger\" *ngIf=\"neptun.errors.pattern\">6 karakter szükséges!</small>\n          </div>\n\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col col-6 col-md-8 col-lg-12\">\n    <div class=\"form-group\">\n      <label for=\"firstName\">Keresztnév:</label>\n      <input name=\"firstName\" type=\"text\" class=\"form-control\" required #firstName=\"ngModel\" \n      [class.is-valid]=\"firstName.valid && firstName.touched\" [class.is-invalid]=\"firstName.invalid && firstName.touched\" \n      placeholder=\"...\" [(ngModel)]=\"userModel.firstName\">\n      <!--HIBAÜZENETEK-->\n      <small class=\"text-danger\" [class.d-none] =\"firstName.valid || firstName.untouched\">Kérdem adja meg a keresztnevét!</small>\n    </div>\n</div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col col-6 col-md-8 col-lg-12\">\n    <div class=\"form-group\">\n      <label for=\"lastName\">Vezetéknév:</label>\n      <input name=\"lastName\" type=\"text\" class=\"form-control\" required #lastName=\"ngModel\" \n      [class.is-valid]=\"lastName.valid && lastName.touched\" [class.is-invalid]=\"lastName.invalid &&lastName.touched\" \n      placeholder=\"...\" [(ngModel)]=\"userModel.lastName\">\n      <!--HIBAÜZENETEK-->\n      <small class=\"text-danger\" [class.d-none] =\"lastName.valid || lastName.untouched\">Kérdem adja meg a vezetéknevét!</small>\n    </div>\n</div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col col-6 col-md-8 col-lg-12\">\n    <div class=\"form-group\">\n      <label for=\"username\">Felhasználónév:</label>\n      <input name=\"username\" type=\"text\" class=\"form-control\" pattern=\"[0-9a-zA-Z]{4,10}\" required #username=\"ngModel\" \n      [class.is-valid]=\"username.valid && username.touched\" [class.is-invalid]=\"username.invalid && username.touched\" \n      placeholder=\"...\" [(ngModel)]=\"userModel.username\">\n\n       <!--HIBAÜZENETEK-->\n       <div [class.d-none]=\"username.valid ||username.untouched\" *ngIf=\"username.errors\">\n        <small class=\"text-danger\" *ngIf=\"username.errors.required\">Kérem adja meg a felhasználónevet!</small>\n        <small class=\"text-danger\" *ngIf=\"username.errors.pattern\">Minimum 4, maximum 10 karakter!</small>\n        </div>\n\n    </div>\n</div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col col-6 col-md-8 col-lg-12\">\n    <div class=\"form-group\">\n        <label for=\"pwd\">Jelszó:</label>\n        <input name=\"pwd\" type=\"password\" class=\"form-control\" pattern=\"[0-9a-zA-Z]{8,8}\" required #pwd=\"ngModel\" \n        [class.is-valid]=\"pwd.valid && pwd.touched\" [class.is-invalid]=\"pwd.invalid && pwd.touched\" \n        placeholder=\"***\" [(ngModel)]=\"userModel.pwd\">\n\n         <!--HIBAÜZENETEK-->\n         <div [class.d-none]=\"pwd.valid ||pwd.untouched\" *ngIf=\"pwd.errors\">\n          <small class=\"text-danger\" *ngIf=\"pwd.errors.required\">Kérem adja meg a jelszavát!</small>\n          <small class=\"text-danger\" *ngIf=\"pwd.errors.pattern\">8 karakter szükséges!</small>\n          </div>\n\n      </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col col-6 col-md-8 col-lg-12\">\n      <div class=\"form-group\">\n        <label for=\"email\">Email:</label>\n        <input name=\"email\" type=\"email\" class=\"form-control\" required #email=\"ngModel\" \n        [class.is-valid]=\"email.valid && email.touched\" [class.is-invalid]=\"email.invalid && email.touched\" \n        placeholder=\"...\" [(ngModel)]=\"userModel.email\">\n        <!--HIBAÜZENETEK-->\n      <small class=\"text-danger\" [class.d-none] =\"email.valid || email.untouched\">Kérdem adja meg az e-mail címét!</small>\n      </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col col-6 col-md-8 col-lg-12\">\n      <div class=\"form-group\">\n        <label for=\"teamName\">Csapatnév:</label>\n        <input name=\"teamName\" type=\"text\" class=\"form-control\" required #teamName=\"ngModel\" \n        [class.is-valid]=\"teamName.valid && teamName.touched\" [class.is-invalid]=\"teamName.invalid && teamName.touched\" \n        placeholder=\"...\" [(ngModel)]=\"userModel.teamName\">\n        <!--HIBAÜZENETEK-->\n      <small class=\"text-danger\" [class.d-none] =\"teamName.valid || teamName.untouched\">Kérdem adja meg a csapata nevét!</small>\n      </div>\n    </div>\n</div>\n\n<div class='row'>\n    <div class=\"col col-6 col-md-8 col-lg-12\">\n    <button type=\"submit\" [disabled]=\"userForm.form.invalid\" name=\"submit\" value=\"Submit\" class=\"btn btn-light\">Regisztrál</button>\n    <button id='back' class='btn btn-light' [routerLink]=\"['/login']\">Vissza</button>\n    </div>\n</div>\n  </form>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/structure/footer/footer.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/structure/footer/footer.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"row\">\n            <div id=\"face\" class=\"col col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n                <a  href=\"https://hu-hu.facebook.com/sztekomm\" target=\"_blank\">facebook</a>\n                </div>\n\n                <div id=\"insta\" class=\"col col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n                    <a  href=\"https://www.instagram.com/sztekomm/?hl=hu\" target=\"_blank\">insta</a>\n                </div>\n\n\n                <div  id=\"jgypk\" class=\"col col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n                    <a  href=\"http://www.jgypk.u-szeged.hu/\" target=\"_blank\">jgypk</a>\n                </div>\n        </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/structure/navbarcomp/navbarcomp.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/structure/navbarcomp/navbarcomp.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class='navbar navbar-dark bg-primary'>\n    <button class=\"btn btn-dark\" [routerLink]=\"['/targyak']\">Tárgyak</button>\n    <button class=\"btn btn-dark\" [routerLink]=\"['/diakok']\">Diákok</button>\n    <button class=\"btn btn-dark\" [routerLink]=\"['/igenyles']\">Igénylések</button>\n      <button type=\"button\" class=\"btn btn-dark\" (click) = \"login.logoutUser()\">Kilépés</button>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/structure/navbardiak/navbardiak.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/structure/navbardiak/navbardiak.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<nav class='navbar navbar-dark bg-primary'>\n    <button class=\"btn btn-dark\" [routerLink]=\"['/targyakuser']\">Tárgyak</button>\n    <button class=\"btn btn-dark\" [routerLink]=\"['/igenyleseim']\">Igénylések</button>\n      <button type=\"button\" class=\"btn btn-dark\" (click) = \"login.logoutUser()\">Kilépés</button>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/igenyleseim/igenyleseim.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/igenyleseim/igenyleseim.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbardiak></app-navbardiak>\n\n<div class='wrap'>\n<div class=\"md-form\">\n    <button name='hozzaad' id='hozBtn'(click)='showMe()' class='btn btn-primary'><img class='clk-pic' src='../../../assets/img/plusz.png'></button> \n   </div>\n  \n  <!--HOZZÁADÁS--------------------->\n  <div class='cont-panel'[hidden]='display'>\n    <form  #modosit ='ngForm' novalidate>\n      <div class=\"form-group\">\n        <label for='targy'>igényelt tárgy:</label>\n        <input type=\"text\" name=\"targy\" class=\"form-control\" [(ngModel)]='pluszIgeny.igenyelt_targy' required\n        placeholder='...'>\n   </div>\n   \n   <div class=\"form-group\">\n    <label for='menny'>tárgy mennyiség:</label>\n    <input type=\"text\" name=\"menny\" class=\"form-control\" [(ngModel)]='pluszIgeny.targy_mennyiseg' required\n    placeholder='...'>\n</div>\n\n   <div class=\"form-group\">\n    <label for='ig'>Eddig igényelném (tól/ig):</label>\n    <input type=\"text\" name=\"ig\" class=\"form-control\" [(ngModel)]='pluszIgeny.igeny_vege' required\n    placeholder='...'>\n</div>\n\n<div class=\"form-group\">\n    <label for='nev'>Igénylő neve:</label>\n    <input type=\"text\" name=\"nev\" class=\"form-control\" [(ngModel)]='pluszIgeny.igenylo' required \n    placeholder='...'>\n</div>\n    <button name='mentes' id='mentes' (click)='ujIgeny()' class='btn btn-primary'[disabled]=\"modosit.form.invalid\">Mentés</button>\n  </form>\n  </div>\n\n<div class='container'>\n    <table class='table table-dark'>\n        <thead>\n            <th>{{igenyHead[0]}}</th>\n            <th>{{igenyHead[1]}}</th>\n            <th>{{igenyHead[2]}}</th>\n            <th>{{igenyHead[3]}}</th>\n            <th>{{igenyHead[4]}}</th>\n            <th>{{igenyHead[5]}}</th>\n        </thead>\n\n        <tr *ngFor ='let i of igenyArr'>\n            <td>{{i.igenyelt_targy}}</td>\n            <td>{{i.targy_mennyiseg}}</td>\n            <td>{{i.igeny_idopont}}</td>\n            <td>{{i.igeny_vege}}</td>\n            <td>{{i.igenylo}}</td>\n            <td>{{i.elbiralt}}</td>\n        </tr>\n    </table>\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/targyakuser/targyakuser.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/targyakuser/targyakuser.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbardiak></app-navbardiak>\n\n<div class='wrap'>\n<div class='container'>\n    <table class='table table-dark'>\n        <thead>\n            <th>{{targyHead[0]}}</th>\n            <th>{{targyHead[1]}}</th>\n            <th>{{targyHead[2]}}</th>\n            <th>{{targyHead[3]}}</th>\n            <th>{{targyHead[4]}}</th>\n        </thead>\n\n        <tr *ngFor ='let i of targyak'>\n            <td>{{i.targy_id}}</td>\n            <td>{{i.targy_marka}}</td>\n            <td>{{i.targy_tipus}}</td>\n            <td>{{i.targy_db}}</td>\n            <td>{{i.targy_elerheto}}</td>\n\n        </tr>\n    </table>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbardiak></app-navbardiak>\n\n<body>\n<div class='container-fluid'>\n  <p>Üdvözlünk a Médiaműhely felületén!</p>\n</div>\n</body>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid{\r\n\r\n    background-color:none;\r\n    min-height:100vw;\r\n    background-image:url('bgdashboard.jpg');\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-attachment:fixed;\r\n    background-size: cover;\r\n}\r\n.navbar{\r\n\r\n    background-color:rgb(0,123,255);\r\n    border-top:20px solid black;\r\n}\r\na{\r\n\r\n    color:lightskyblue;\r\n}\r\np{\r\n\r\n    display:block;\r\n    position:relative;\r\n    color:blue;\r\n    margin-left:37vw;\r\n    margin-top:5vw;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHVDQUF3RDtJQUN4RCxrQ0FBa0M7SUFDbEMsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7QUFDQTs7SUFFSSwrQkFBK0I7SUFDL0IsMkJBQTJCO0FBQy9CO0FBQ0E7O0lBRUksa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOm5vbmU7XHJcbiAgICBtaW4taGVpZ2h0OjEwMHZ3O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvYmdkYXNoYm9hcmQuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDpmaXhlZDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLm5hdmJhcntcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigwLDEyMywyNTUpO1xyXG4gICAgYm9yZGVyLXRvcDoyMHB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbmF7XHJcblxyXG4gICAgY29sb3I6bGlnaHRza3libHVlO1xyXG59XHJcbnB7XHJcblxyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgY29sb3I6Ymx1ZTtcclxuICAgIG1hcmdpbi1sZWZ0OjM3dnc7XHJcbiAgICBtYXJnaW4tdG9wOjV2dztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");



let AdminComponent = class AdminComponent {
    constructor(login) {
        this.login = login;
    }
    ngOnInit() {
    }
};
AdminComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/admin/diakok/diakok.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/diakok/diakok.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid{\r\n   /*background-color:lightgreen;*/\r\n     height:100vh;\r\n     background-image:url('bg.svg');\r\n     background-position: center center;\r\n     background-repeat: no-repeat;\r\n     background-attachment:fixed;\r\n     background-size: cover;\r\n }\r\n .cont-panel{\r\n\r\n   height:-webkit-fit-content;\r\n\r\n   height:-moz-fit-content;\r\n\r\n   height:fit-content;\r\n   width:-webkit-fit-content;\r\n   width:-moz-fit-content;\r\n   width:fit-content;\r\n   margin-left:40vw;\r\n }\r\n /*------------HOZZÁADÁS GOMB--------------*/\r\n .md-form{\r\n\r\n   margin-top:5vw;\r\n   display:-webkit-inline-box;\r\n   display:inline-flex;\r\n   width:100%;\r\n}\r\n #hozBtn{\r\n\r\n   border-radius: 45%;\r\n   cursor: pointer;\r\n }\r\n .clk-pic{\r\n width:100%;\r\n height:2vw;\r\n}\r\n /*-----------------TÁBLÁZAT------------------------*/\r\n .btn{\r\n   position: relative;\r\n   margin-left:3vw;\r\n   margin-top: auto;\r\n }\r\n .form-group{\r\n   align-content: center;\r\n}\r\n table{\r\n    margin-top: 3vw;\r\n    border-top:10px solid lightblue;\r\n    border-left:10px solid lightblue;\r\n    border-right:10px solid lightblue;\r\n    border-bottom:10px solid lightblue;\r\n    border-radius:5%;\r\n }\r\n #hozza{\r\n\r\n   background-color:green;\r\n   -webkit-box-pack: center;\r\n           justify-content: center;\r\n   opacity:0;\r\n }\r\n /*-------------INPUT MEZŐK------------*/\r\n .szerk{\r\n\r\n  max-width: 70px;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGlha29rL2RpYWtvay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csK0JBQStCO0tBQzdCLFlBQVk7S0FDWiw4QkFBa0Q7S0FDbEQsa0NBQWtDO0tBQ2xDLDRCQUE0QjtLQUM1QiwyQkFBMkI7S0FDM0Isc0JBQXNCO0NBQzFCO0NBQ0E7O0dBRUUsMEJBQWtCOztHQUFsQix1QkFBa0I7O0dBQWxCLGtCQUFrQjtHQUNsQix5QkFBaUI7R0FBakIsc0JBQWlCO0dBQWpCLGlCQUFpQjtHQUNqQixnQkFBZ0I7Q0FDbEI7Q0FDRCwyQ0FBMkM7Q0FDMUM7O0dBRUUsY0FBYztHQUNkLDBCQUFtQjtHQUFuQixtQkFBbUI7R0FDbkIsVUFBVTtBQUNiO0NBQ0M7O0dBRUUsa0JBQWtCO0dBQ2xCLGVBQWU7Q0FDakI7Q0FDRDtDQUNDLFVBQVU7Q0FDVixVQUFVO0FBQ1g7Q0FDQSxvREFBb0Q7Q0FDcEQ7R0FDRyxrQkFBa0I7R0FDbEIsZUFBZTtHQUNmLGdCQUFnQjtDQUNsQjtDQUNEO0dBQ0cscUJBQXFCO0FBQ3hCO0NBRUM7SUFDRyxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakMsa0NBQWtDO0lBQ2xDLGdCQUFnQjtDQUNuQjtDQUNBOztHQUVFLHNCQUFzQjtHQUN0Qix3QkFBdUI7V0FBdkIsdUJBQXVCO0dBQ3ZCLFNBQVM7Q0FDWDtDQUNBLHVDQUF1QztDQUN2Qzs7RUFFQyxlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vZGlha29rL2RpYWtvay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuICAgLypiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JlZW47Ki9cclxuICAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcuc3ZnJyk7XHJcbiAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgIGJhY2tncm91bmQtYXR0YWNobWVudDpmaXhlZDtcclxuICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gfVxyXG4gLmNvbnQtcGFuZWx7XHJcblxyXG4gICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XHJcbiAgIHdpZHRoOmZpdC1jb250ZW50O1xyXG4gICBtYXJnaW4tbGVmdDo0MHZ3O1xyXG4gfVxyXG4vKi0tLS0tLS0tLS0tLUhPWlrDgUFEw4FTIEdPTUItLS0tLS0tLS0tLS0tLSovXHJcbiAubWQtZm9ybXtcclxuXHJcbiAgIG1hcmdpbi10b3A6NXZ3O1xyXG4gICBkaXNwbGF5OmlubGluZS1mbGV4O1xyXG4gICB3aWR0aDoxMDAlO1xyXG59XHJcbiAjaG96QnRue1xyXG5cclxuICAgYm9yZGVyLXJhZGl1czogNDUlO1xyXG4gICBjdXJzb3I6IHBvaW50ZXI7XHJcbiB9XHJcbi5jbGstcGlje1xyXG4gd2lkdGg6MTAwJTtcclxuIGhlaWdodDoydnc7XHJcbn1cclxuLyotLS0tLS0tLS0tLS0tLS0tLVTDgUJMw4FaQVQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4uYnRue1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIG1hcmdpbi1sZWZ0OjN2dztcclxuICAgbWFyZ2luLXRvcDogYXV0bztcclxuIH1cclxuLmZvcm0tZ3JvdXB7XHJcbiAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuIHRhYmxle1xyXG4gICAgbWFyZ2luLXRvcDogM3Z3O1xyXG4gICAgYm9yZGVyLXRvcDoxMHB4IHNvbGlkIGxpZ2h0Ymx1ZTtcclxuICAgIGJvcmRlci1sZWZ0OjEwcHggc29saWQgbGlnaHRibHVlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OjEwcHggc29saWQgbGlnaHRibHVlO1xyXG4gICAgYm9yZGVyLWJvdHRvbToxMHB4IHNvbGlkIGxpZ2h0Ymx1ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6NSU7XHJcbiB9XHJcbiAjaG96emF7XHJcblxyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuO1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgb3BhY2l0eTowO1xyXG4gfVxyXG4gLyotLS0tLS0tLS0tLS0tSU5QVVQgTUVaxZBLLS0tLS0tLS0tLS0tKi9cclxuIC5zemVya3tcclxuXHJcbiAgbWF4LXdpZHRoOiA3MHB4O1xyXG4gfSJdfQ== */");

/***/ }),

/***/ "./src/app/admin/diakok/diakok.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/diakok/diakok.component.ts ***!
  \**************************************************/
/*! exports provided: DiakokComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiakokComponent", function() { return DiakokComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../signup.service */ "./src/app/signup.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let DiakokComponent = class DiakokComponent {
    constructor(router, serv, kuld) {
        this.router = router;
        this.serv = serv;
        this.kuld = kuld;
        this.diakHead = ['neptun', 'keresztnév', 'vezetéknév', 'jelszó', 'felhasználónév', 'csapatnév'];
        this.ShowEditTable = false;
        this.display = true;
    }
    ngOnInit() {
        this.getDiak2();
    }
    /*------------------------FELHASZNÁLÓ LEKÉRÉSE---------- */
    getDiak2() {
        this.serv.getDiak().subscribe((res) => {
            this.diak = res;
        }, (err) => {
            this.error = err;
        });
    }
    /*----------------PLUSZ GOMB (LENYÍLÁS)-----------------*/
    showMe() {
        if (this.display) {
            this.display = false;
        }
        else {
            this.display = true;
        }
    }
    /*---------------ÚJ NEPTUNKÓD HOZZÁADÁSA---------------- */
    nepSave(event) {
        this.nep = event.target.value;
        return this.nep;
    }
    /*------------ÚJ DIÁK HOZZÁADÁSA---------------------------*/
    ujDiak() {
        //console.log("küldés előtt nep: "+typeof(this.nep));
        this.serv.sendNeptun(this.nep).subscribe((data) => {
            alert('Neptunkód felvéve!');
            this.ngOnInit();
        }, error => {
            alert('Hiba a visszaérkezésnél(user töröl): ' + error);
        });
    }
    /*---------------TÁBLÁZAT ELEMEINEK SZERKESZTHEŐSÉGE----------*/
    Editable(val) {
        if (val == this.editId) {
            this.editId = 0;
        }
        else {
            this.editId = val;
        }
        return this.editId;
    }
    /*----------------FELHASZNÁLÓ MÓDOSÍT--------------------------- */
    Mod(val) {
        if (val == this.editId) {
            this.editId = 0;
        }
        else {
            this.editId = val;
        }
        return this.editId;
    }
    /*----------------FELHASZNÁLÓ TÖRÖL--------------------------- */
    Del(id) {
        //this.torlesre = event.target.value;
        this.torlesre = id;
        console.log('id ' + this.torlesre);
        this.serv.userDel(this.torlesre).subscribe((data) => {
            alert('Sikeres törlés!');
            this.ngOnInit();
        }, error => {
            alert('Hiba a visszaérkezésnél(user töröl): ' + error);
        });
    }
    /*----------------FELHASZNÁLÓ MENT--------------------------- */
    Save(i) {
        //this.modDiak = event.target.value;
        console.log('Felhasználó küldésre : ' + JSON.stringify(i));
        this.serv.userMod(i).subscribe((data) => {
            alert(JSON.stringify(data));
            this.ngOnInit();
        }, error => {
            alert('Hiba user frissítésnél: ' + JSON.stringify(error));
        });
    }
};
DiakokComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _signup_service__WEBPACK_IMPORTED_MODULE_3__["SignupService"] }
];
DiakokComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-diakok',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./diakok.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/diakok/diakok.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./diakok.component.css */ "./src/app/admin/diakok/diakok.component.css")).default]
    })
], DiakokComponent);



/***/ }),

/***/ "./src/app/admin/diakok/diakszerk/diakszerk.component.css":
/*!****************************************************************!*\
  !*** ./src/app/admin/diakok/diakszerk/diakszerk.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid{\r\n\r\n    background-image:url('bg.svg');\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-attachment:fixed;\r\n    background-size: cover;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGlha29rL2RpYWtzemVyay9kaWFrc3plcmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSw4QkFBcUQ7SUFDckQsa0NBQWtDO0lBQ2xDLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vZGlha29rL2RpYWtzemVyay9kaWFrc3plcmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcuc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDpmaXhlZDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/admin/diakok/diakszerk/diakszerk.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/diakok/diakszerk/diakszerk.component.ts ***!
  \***************************************************************/
/*! exports provided: DiakszerkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiakszerkComponent", function() { return DiakszerkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user */ "./src/app/user.ts");



let DiakszerkComponent = class DiakszerkComponent {
    constructor() {
        this.szerkModel = new _user__WEBPACK_IMPORTED_MODULE_2__["User"]("", "", "", "", "", "", "");
    }
    ngOnInit() {
    }
};
DiakszerkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-diakszerk',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./diakszerk.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/diakok/diakszerk/diakszerk.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./diakszerk.component.css */ "./src/app/admin/diakok/diakszerk/diakszerk.component.css")).default]
    })
], DiakszerkComponent);



/***/ }),

/***/ "./src/app/admin/igenyles/igenyles.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin/igenyles/igenyles.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid{\r\n  /*background-color:lightgreen;*/\r\n    height:100vh;\r\n    background-image:url('bg.svg');\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-attachment:fixed;\r\n    background-size: cover;\r\n}\r\n.wrap{\r\n\r\n  min-height:100vw;\r\n  background-image:url('bg.svg');\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-attachment:fixed;\r\n  background-size: cover;\r\n}\r\n.cont-panel{\r\n\r\n  height:-webkit-fit-content;\r\n\r\n  height:-moz-fit-content;\r\n\r\n  height:fit-content;\r\n  width:-webkit-fit-content;\r\n  width:-moz-fit-content;\r\n  width:fit-content;\r\n  margin-left:40vw;\r\n}\r\n/*-------+ PANEL------*/\r\n.md-form{\r\n\r\n  margin-top:5vw;\r\n  display:-webkit-inline-box;\r\n  display:inline-flex;\r\n  width:100%;\r\n}\r\n#hozBtn{\r\n\r\n  border-radius: 45%;\r\n}\r\n.clk-pic{\r\nwidth:100%;\r\nheight:2vw;\r\n}\r\n/*-------------FORM--------------*/\r\n#targyhozzad{\r\n\r\n  position:relative;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  height:-webkit-fit-content;\r\n  height:-moz-fit-content;\r\n  height:fit-content;\r\n}\r\n.btn{\r\n  position: relative;\r\n  margin-left:3vw;\r\n  margin-top: auto;\r\n}\r\ntable{\r\n  margin-top: 3vw;\r\n  border-top:10px solid lightblue;\r\n  border-left:10px solid lightblue;\r\n  border-right:10px solid lightblue;\r\n  border-bottom:10px solid lightblue;\r\n  border-radius:5%;\r\n}\r\n/*--------------TABLE SZERKESZTÉSNÉL----------*/\r\n.szerk{\r\n\r\nmax-width:100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vaWdlbnlsZXMvaWdlbnlsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUErQjtJQUM3QixZQUFZO0lBQ1osOEJBQWtEO0lBQ2xELGtDQUFrQztJQUNsQyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHNCQUFzQjtBQUMxQjtBQUNBOztFQUVFLGdCQUFnQjtFQUNoQiw4QkFBa0Q7RUFDbEQsa0NBQWtDO0VBQ2xDLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCO0FBQ0E7O0VBRUUsMEJBQWtCOztFQUFsQix1QkFBa0I7O0VBQWxCLGtCQUFrQjtFQUNsQix5QkFBaUI7RUFBakIsc0JBQWlCO0VBQWpCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQSx1QkFBdUI7QUFDdkI7O0VBRUUsY0FBYztFQUNkLDBCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaO0FBQ0E7O0VBRUUsa0JBQWtCO0FBQ3BCO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsVUFBVTtBQUNWO0FBQ0Esa0NBQWtDO0FBQ2xDOztFQUVFLGlCQUFpQjtFQUNqQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGlDQUFpQztFQUNqQyxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0FBQ2xCO0FBQ0EsK0NBQStDO0FBQy9DOztBQUVBLGVBQWU7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2lnZW55bGVzL2lnZW55bGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gIC8qYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZWVuOyovXHJcbiAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9iZy5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OmZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4ud3JhcHtcclxuXHJcbiAgbWluLWhlaWdodDoxMDB2dztcclxuICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9iZy5zdmcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OmZpeGVkO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmNvbnQtcGFuZWx7XHJcblxyXG4gIGhlaWdodDpmaXQtY29udGVudDtcclxuICB3aWR0aDpmaXQtY29udGVudDtcclxuICBtYXJnaW4tbGVmdDo0MHZ3O1xyXG59XHJcbi8qLS0tLS0tLSsgUEFORUwtLS0tLS0qL1xyXG4ubWQtZm9ybXtcclxuXHJcbiAgbWFyZ2luLXRvcDo1dnc7XHJcbiAgZGlzcGxheTppbmxpbmUtZmxleDtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcbiNob3pCdG57XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDQ1JTtcclxufVxyXG4uY2xrLXBpY3tcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjJ2dztcclxufVxyXG4vKi0tLS0tLS0tLS0tLS1GT1JNLS0tLS0tLS0tLS0tLS0qL1xyXG4jdGFyZ3lob3p6YWR7XHJcblxyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XHJcbn1cclxuLmJ0bntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWxlZnQ6M3Z3O1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbn1cclxudGFibGV7XHJcbiAgbWFyZ2luLXRvcDogM3Z3O1xyXG4gIGJvcmRlci10b3A6MTBweCBzb2xpZCBsaWdodGJsdWU7XHJcbiAgYm9yZGVyLWxlZnQ6MTBweCBzb2xpZCBsaWdodGJsdWU7XHJcbiAgYm9yZGVyLXJpZ2h0OjEwcHggc29saWQgbGlnaHRibHVlO1xyXG4gIGJvcmRlci1ib3R0b206MTBweCBzb2xpZCBsaWdodGJsdWU7XHJcbiAgYm9yZGVyLXJhZGl1czo1JTtcclxufVxyXG4vKi0tLS0tLS0tLS0tLS0tVEFCTEUgU1pFUktFU1pUw4lTTsOJTC0tLS0tLS0tLS0qL1xyXG4uc3plcmt7XHJcblxyXG5tYXgtd2lkdGg6MTAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/admin/igenyles/igenyles.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/igenyles/igenyles.component.ts ***!
  \******************************************************/
/*! exports provided: IgenylesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IgenylesComponent", function() { return IgenylesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../login.service */ "./src/app/login.service.ts");



let IgenylesComponent = class IgenylesComponent {
    constructor(ig) {
        this.ig = ig;
        this.igenyHead = ['igényelt tárgy', 'tárgy mennyisége', 'igénylés időpontja', 'igénylés időtartama', 'igénylő', 'elbírált'];
    }
    igenyLeker() {
        this.ig.getIgeny().subscribe((res) => {
            this.igenyArr = res;
        }, (err) => {
            this.error = err;
            alert('Hiba visszaérkezésnél: ' + this.error);
        });
    }
    ngOnInit() {
        this.igenyLeker();
    }
    /*-------------------IGÉNY TÖRLÉSE-------------*/
    Del(igeny) {
        //this.torlesre = event.target.value;
        this.torlesre = igeny;
        //console.log('(front)id '+this.torlesre);
        this.ig.igenyDel(this.torlesre).subscribe((data) => {
            alert(JSON.stringify(data));
            this.ngOnInit();
        }, error => {
            alert('Hiba a visszaérkezésnél: ' + error);
        });
    }
    /*--------------------IGÉNY MÓDOSÍTÁSA---------- */
    Mod(val) {
        if (val == this.editId) {
            this.editId = 0;
        }
        else {
            this.editId = val;
        }
        return this.editId;
    }
    /*--------------------IGÉNYEK MENTÉSE---------- */
    Save(i) {
        console.log('tárgy küldésre : ' + JSON.stringify(i));
        this.ig.igenyMod(i).subscribe((data) => {
            alert(data);
            this.ngOnInit();
        }, error => {
            alert('Hiba tárgy frissítésnél: ' + JSON.stringify(error));
        });
    }
};
IgenylesComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
];
IgenylesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-igenyles',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./igenyles.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/igenyles/igenyles.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./igenyles.component.css */ "./src/app/admin/igenyles/igenyles.component.css")).default]
    })
], IgenylesComponent);



/***/ }),

/***/ "./src/app/admin/targyak/targyak.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin/targyak/targyak.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid{\r\n    /*background-color:lightgreen;*/\r\n      height:100vh;\r\n      background-image:url('bg.svg');\r\n      background-position: center center;\r\n      background-repeat: no-repeat;\r\n      background-attachment:fixed;\r\n      background-size: cover;\r\n  }\r\n  .cont-panel{\r\n\r\n    height:-webkit-fit-content;\r\n\r\n    height:-moz-fit-content;\r\n\r\n    height:fit-content;\r\n    width:-webkit-fit-content;\r\n    width:-moz-fit-content;\r\n    width:fit-content;\r\n    margin-left:40vw;\r\n  }\r\n  /*-------+ PANEL------*/\r\n  .md-form{\r\n\r\n    margin-top:5vw;\r\n    display:-webkit-inline-box;\r\n    display:inline-flex;\r\n    width:100%;\r\n }\r\n  #hozBtn{\r\n\r\n    border-radius: 45%;\r\n  }\r\n  .clk-pic{\r\n  width:100%;\r\n  height:2vw;\r\n}\r\n  /*-------------FORM--------------*/\r\n  #targyhozzad{\r\n\r\n    position:relative;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height:-webkit-fit-content;\r\n    height:-moz-fit-content;\r\n    height:fit-content;\r\n  }\r\n  .btn{\r\n    position: relative;\r\n    margin-left:3vw;\r\n    margin-top: auto;\r\n  }\r\n  table{\r\n    margin-top: 3vw;\r\n    border-top:10px solid lightblue;\r\n    border-left:10px solid lightblue;\r\n    border-right:10px solid lightblue;\r\n    border-bottom:10px solid lightblue;\r\n    border-radius:5%;\r\n }\r\n  /*--------------TABLE SZERKESZTÉSNÉL----------*/\r\n  .szerk{\r\n\r\n  max-width:100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdGFyZ3lhay90YXJneWFrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7TUFDN0IsWUFBWTtNQUNaLDhCQUFrRDtNQUNsRCxrQ0FBa0M7TUFDbEMsNEJBQTRCO01BQzVCLDJCQUEyQjtNQUMzQixzQkFBc0I7RUFDMUI7RUFDQTs7SUFFRSwwQkFBa0I7O0lBQWxCLHVCQUFrQjs7SUFBbEIsa0JBQWtCO0lBQ2xCLHlCQUFpQjtJQUFqQixzQkFBaUI7SUFBakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtFQUNBLHVCQUF1QjtFQUN2Qjs7SUFFRSxjQUFjO0lBQ2QsMEJBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixVQUFVO0NBQ2I7RUFDQzs7SUFFRSxrQkFBa0I7RUFDcEI7RUFDRDtFQUNDLFVBQVU7RUFDVixVQUFVO0FBQ1o7RUFDQSxrQ0FBa0M7RUFDaEM7O0lBRUUsaUJBQWlCO0lBQ2pCLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsaUNBQWlDO0lBQ2pDLGtDQUFrQztJQUNsQyxnQkFBZ0I7Q0FDbkI7RUFDQSwrQ0FBK0M7RUFDL0M7O0VBRUMsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Rhcmd5YWsvdGFyZ3lhay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZWVuOyovXHJcbiAgICAgIGhlaWdodDoxMDB2aDtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcuc3ZnJyk7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDpmaXhlZDtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgLmNvbnQtcGFuZWx7XHJcblxyXG4gICAgaGVpZ2h0OmZpdC1jb250ZW50O1xyXG4gICAgd2lkdGg6Zml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDo0MHZ3O1xyXG4gIH1cclxuICAvKi0tLS0tLS0rIFBBTkVMLS0tLS0tKi9cclxuICAubWQtZm9ybXtcclxuXHJcbiAgICBtYXJnaW4tdG9wOjV2dztcclxuICAgIGRpc3BsYXk6aW5saW5lLWZsZXg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gfVxyXG4gICNob3pCdG57XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogNDUlO1xyXG4gIH1cclxuIC5jbGstcGlje1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjJ2dztcclxufVxyXG4vKi0tLS0tLS0tLS0tLS1GT1JNLS0tLS0tLS0tLS0tLS0qL1xyXG4gICN0YXJneWhvenphZHtcclxuXHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGhlaWdodDpmaXQtY29udGVudDtcclxuICB9XHJcbiAgLmJ0bntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OjN2dztcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgfVxyXG4gIHRhYmxle1xyXG4gICAgbWFyZ2luLXRvcDogM3Z3O1xyXG4gICAgYm9yZGVyLXRvcDoxMHB4IHNvbGlkIGxpZ2h0Ymx1ZTtcclxuICAgIGJvcmRlci1sZWZ0OjEwcHggc29saWQgbGlnaHRibHVlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OjEwcHggc29saWQgbGlnaHRibHVlO1xyXG4gICAgYm9yZGVyLWJvdHRvbToxMHB4IHNvbGlkIGxpZ2h0Ymx1ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6NSU7XHJcbiB9XHJcbiAvKi0tLS0tLS0tLS0tLS0tVEFCTEUgU1pFUktFU1pUw4lTTsOJTC0tLS0tLS0tLS0qL1xyXG4gLnN6ZXJre1xyXG5cclxuICBtYXgtd2lkdGg6MTAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/admin/targyak/targyak.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/targyak/targyak.component.ts ***!
  \****************************************************/
/*! exports provided: TargyakComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargyakComponent", function() { return TargyakComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _targy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../targy */ "./src/app/targy.ts");
/* harmony import */ var src_app_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let TargyakComponent = class TargyakComponent {
    constructor(serv, router) {
        this.serv = serv;
        this.router = router;
        this.targyHead = ['ID', 'márka', 'típus', 'DB', 'elérhető'];
        this.igen_nem = ['igen', 'nem'];
        this.ujTargy = new _targy__WEBPACK_IMPORTED_MODULE_2__["Targy"]("", "", 0, "");
        this.display = true;
        this.targyMent = new _targy__WEBPACK_IMPORTED_MODULE_2__["Targy"]("", "", 0, "");
    }
    ngOnInit() {
        this.targyLeker();
    }
    /*----------------RÁDIÓGOMBOK---------------------------*/
    valaszValt(event) {
        this.valasz = event.target.value;
    }
    /*----------------PLUSZ GOMB (LENYÍLÁS)-----------------*/
    showMe() {
        if (this.display) {
            this.display = false;
        }
        else {
            this.display = true;
        }
    }
    /*----------------ÚJ TÁRGY ELKÜLD-----------------*/
    targyHozza() {
        console.log('frontról: ' + JSON.stringify(this.ujTargy));
        this.serv.targyFel(this.ujTargy).subscribe((data) => {
            alert("A " + JSON.stringify(data) + " tárgy felkerült a listára!"); //console.log("Ez jött fornton: "+JSON.stringify(data)),
            this.ngOnInit();
        }, (error) => {
            console.log("Hiba frontnál!" + JSON.stringify(error));
        });
    }
    /*--------------TÁRGYAK LEKÉRÉSE------------------*/
    targyLeker() {
        this.serv.getTargy().subscribe((res) => {
            this.targyak = res;
            //console.log("visszajott targyak: " +JSON.stringify(this.targyak) + ""+typeof res)
        }, (err) => {
            this.error = err;
            //console.log("hiba: "+this.error)
        });
    }
    /*-------------------TÁRGYAK TÖRLÉSE-------------*/
    Del(id) {
        //this.torlesre = event.target.value;
        this.torlesre = id;
        console.log('id ' + this.torlesre);
        this.serv.targyDel(this.torlesre).subscribe((data) => {
            alert(data);
            this.ngOnInit();
        }, error => {
            alert('Hiba a visszaérkezésnél: ' + error);
        });
    }
    /*--------------------TÁRGYAK MÓDOSÍTÁSA---------- */
    Mod(val) {
        if (val == this.editId) {
            this.editId = 0;
        }
        else {
            this.editId = val;
        }
        return this.editId;
    }
    /*--------------------TÁRGYAK MENTÉSE---------- */
    Save(i) {
        console.log('tárgy küldésre : ' + JSON.stringify(i));
        this.serv.targyMod(i).subscribe((data) => {
            alert(JSON.stringify(data));
            this.ngOnInit();
        }, error => {
            alert('Hiba tárgy frissítésnél: ' + JSON.stringify(error));
        });
    }
};
TargyakComponent.ctorParameters = () => [
    { type: src_app_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
TargyakComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-targyak',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./targyak.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/targyak/targyak.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./targyak.component.css */ "./src/app/admin/targyak/targyak.component.css")).default]
    })
], TargyakComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid{\r\n    background-image:url('bg.svg');\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-attachment:fixed;\r\n    background-size: cover;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBNEM7SUFDNUMsa0NBQWtDO0lBQ2xDLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uL2Fzc2V0cy9pbWcvYmcuc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDpmaXhlZDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'nyilvantart';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _structure_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./structure/footer/footer.component */ "./src/app/structure/footer/footer.component.ts");
/* harmony import */ var _regisztral_regisztral_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./regisztral/regisztral.component */ "./src/app/regisztral/regisztral.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _admin_targyak_targyak_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/targyak/targyak.component */ "./src/app/admin/targyak/targyak.component.ts");
/* harmony import */ var _admin_diakok_diakok_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/diakok/diakok.component */ "./src/app/admin/diakok/diakok.component.ts");
/* harmony import */ var _admin_igenyles_igenyles_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/igenyles/igenyles.component */ "./src/app/admin/igenyles/igenyles.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _structure_navbarcomp_navbarcomp_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./structure/navbarcomp/navbarcomp.component */ "./src/app/structure/navbarcomp/navbarcomp.component.ts");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _admin_diakok_diakszerk_diakszerk_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/diakok/diakszerk/diakszerk.component */ "./src/app/admin/diakok/diakszerk/diakszerk.component.ts");
/* harmony import */ var _structure_navbardiak_navbardiak_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./structure/navbardiak/navbardiak.component */ "./src/app/structure/navbardiak/navbardiak.component.ts");
/* harmony import */ var _user_igenyleseim_igenyleseim_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user/igenyleseim/igenyleseim.component */ "./src/app/user/igenyleseim/igenyleseim.component.ts");
/* harmony import */ var _user_targyakuser_targyakuser_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user/targyakuser/targyakuser.component */ "./src/app/user/targyakuser/targyakuser.component.ts");
























const appRoutes = [
    { path: '', redirectTo: 'login', pathMatch: "full" },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'regisztral', component: _regisztral_regisztral_component__WEBPACK_IMPORTED_MODULE_10__["RegisztralComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'targyak', component: _admin_targyak_targyak_component__WEBPACK_IMPORTED_MODULE_14__["TargyakComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'diakok', component: _admin_diakok_diakok_component__WEBPACK_IMPORTED_MODULE_15__["DiakokComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'igenyles', component: _admin_igenyles_igenyles_component__WEBPACK_IMPORTED_MODULE_16__["IgenylesComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'diakszerk', component: _admin_diakok_diakszerk_diakszerk_component__WEBPACK_IMPORTED_MODULE_20__["DiakszerkComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'igenyleseim', component: _user_igenyleseim_igenyleseim_component__WEBPACK_IMPORTED_MODULE_22__["IgenyleseimComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'targyakuser', component: _user_targyakuser_targyakuser_component__WEBPACK_IMPORTED_MODULE_23__["TargyakuserComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _structure_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            _regisztral_regisztral_component__WEBPACK_IMPORTED_MODULE_10__["RegisztralComponent"],
            _user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"],
            _admin_targyak_targyak_component__WEBPACK_IMPORTED_MODULE_14__["TargyakComponent"],
            _admin_diakok_diakok_component__WEBPACK_IMPORTED_MODULE_15__["DiakokComponent"],
            _admin_igenyles_igenyles_component__WEBPACK_IMPORTED_MODULE_16__["IgenylesComponent"],
            _structure_navbarcomp_navbarcomp_component__WEBPACK_IMPORTED_MODULE_18__["NavbarcompComponent"],
            _admin_diakok_diakszerk_diakszerk_component__WEBPACK_IMPORTED_MODULE_20__["DiakszerkComponent"],
            _structure_navbardiak_navbardiak_component__WEBPACK_IMPORTED_MODULE_21__["NavbardiakComponent"],
            _user_igenyleseim_igenyleseim_component__WEBPACK_IMPORTED_MODULE_22__["IgenyleseimComponent"],
            _user_targyakuser_targyakuser_component__WEBPACK_IMPORTED_MODULE_23__["TargyakuserComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientJsonpModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkTableModule"]
        ],
        providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");



let AuthGuard = class AuthGuard {
    constructor(auth) {
        this.auth = auth;
    }
    canActivate(next, state) {
        return this.auth.isLoggedIn;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/igeny.ts":
/*!**************************!*\
  !*** ./src/app/igeny.ts ***!
  \**************************/
/*! exports provided: Igeny */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Igeny", function() { return Igeny; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Igeny {
    constructor(igenyelt_targy, targy_mennyiseg, igeny_idopont, igeny_vege, igenylo, elbiralt, igeny_id) { }
}


/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let LoginService = class LoginService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.url = "http://localhost/nyilvantart/index2.php";
        this.urlDiak = "http://localhost/nyilvantart/table.php";
        this.urlNeptun = "http://localhost/nyilvantart/neptunplus.php";
        this.urlTabla = "http://localhost/nyilvantart/tablazat.php";
        this.urlIgeny = "http://localhost/nyilvantart/igeny.php";
        this.urlTargyFel = "http://localhost/nyilvantart/targyAdmin.php";
        this.urlTargyTorol = "http://localhost/nyilvantart/targyTorol.php";
        this.urlTargyMod = "http://localhost/nyilvantart/targyMod.php";
        this.urlUserDel = "http://localhost/nyilvantart/userDel.php";
        this.urlUserMod = "http://localhost/nyilvantart/userMod.php";
        this.urlIgenyDel = "http://localhost/nyilvantart/igenyDel.php";
        this.urlIgenyMod = "http://localhost/nyilvantart/igenyMod.php";
        this.urlIgenyFel = "http://localhost/nyilvantart/igenyFel.php";
        //authguard
        this.loggedInStatus = false;
        // Http Options
        this.options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    //hibakezelés
    handleError(error) {
        console.log('Hiba! :' + error);
        //user üzenet
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Hiba! Valami félrement..');
    }
    loginRequest(login) {
        //console.log("ezt dobja a loginservice: " + login.username +" "+ login.pwd);
        return this.http.post(this.url, login, this.options);
    }
    setLoggedIn(value) {
        if (value == "sikeres admin belépés!" || value == "sikeres user belépés!") {
            this.loggedInStatus = true;
        }
        else {
            this.loggedInStatus = false;
        }
    }
    get isLoggedIn() {
        return this.loggedInStatus;
    }
    logoutUser() {
        const logOut = false;
        this.http.post(this.url, logOut).subscribe(data => alert("sikeres kijelentkezés!"));
        this.router.navigate(['login']);
    }
    //diakok 
    getDiak() {
        return this.http.get(`${this.urlDiak}/list`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => {
            this.diak = res['data'];
            return this.diak;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    sendNeptun(neptun) {
        return this.http.post(this.urlNeptun, neptun);
    }
    //tárgyak lekérérse
    getTargy() {
        return this.http.get(`${this.urlTabla}/list`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => {
            this.tabla = res['data'];
            return this.tabla;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    //igénylés lekérése
    getIgeny() {
        return this.http.get(`${this.urlIgeny}/list`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => {
            this.igeny = res['data'];
            return this.igeny;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    //tárgy hozzáad (Admin)
    targyFel(targyfel) {
        return this.http.post(this.urlTargyFel, targyfel);
    }
    //tágy töröl (Admin)
    targyDel(key) {
        return this.http.post(this.urlTargyTorol, key);
    }
    //tárgy módosít (Admin)
    targyMod(mod) {
        return this.http.post(this.urlTargyMod, mod);
    }
    //Felhasználó töröl (Admin)
    userDel(id) {
        return this.http.post(this.urlUserDel, id);
    }
    //Felhasználó módosít (Admin)
    userMod(mod) {
        return this.http.post(this.urlUserMod, mod);
    }
    //Igény töröl (Admin)
    igenyDel(id) {
        return this.http.post(this.urlIgenyDel, id);
    }
    //Igény módosít (Admin)
    igenyMod(mod) {
        return this.http.post(this.urlIgenyMod, mod);
    }
    //új igény hozzáad (User)
    igenyFel(val) {
        return this.http.post(this.urlIgenyFel, val);
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html{\r\n\r\n    background-color:none;\r\n}\r\n.container-fluid{\r\n\r\n    height:100vh;\r\n    width:-webkit-max-content;\r\n    width:-moz-max-content;\r\n    width:max-content;\r\n    position:center;\r\n    padding-top:30vh;\r\n    background-image:url('bg.svg');\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-attachment:fixed;\r\n    background-size: cover;\r\n\r\n    /*border-top:10px solid darkgreen;\r\n    border-right:10px solid darkgreen;\r\n    border-left:10px solid #32CD32;\r\n    border-bottom:10px solid darkgreen;*/\r\n    /*justify-content: center;\r\n    align-items: center;*/\r\n \r\n}\r\nimg {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    float:center;\r\n}\r\n#logo{\r\n    height:5vw;\r\n    background-color:none;\r\n}\r\n/*.form-control{\r\n\r\n    border-top:2px solid darkgrey;\r\n    border-bottom:2px solid darkgrey;\r\n    border-left:2px solid darkgrey;\r\n    border-right:2px solid darkgrey;\r\n}*/\r\n.row{\r\n    \r\n    background-color:none;\r\n    /*border-bottom:2px solid #32CD32;\r\n    border-left:2px solid #32CD32;\r\n    border-right:2px solid #32CD32;\r\n    border-top:2px solid #32CD32;\r\n    border-radius:5%;*/\r\n    \r\n}\r\n.col{\r\n\r\n    background-color:none;\r\n    text-align:center;\r\n    align-content:center;\r\n   /* border-bottom:2px solid black;\r\n    border-left:2px solid black;\r\n    border-right:2px solid black;\r\n    border-top:2px solid black;*/\r\n    \r\n}\r\n#kuldhete{\r\n\r\n    opacity:1;\r\n}\r\n#kuld{\r\n\r\n    text-align:center;\r\n}\r\n/*----------FOOTER-------------*/\r\n/*#footer{\r\n    \r\n    position:relative;\r\n    width:100%;\r\n    background-color:none;\r\n    float:bottom;\r\n    min-height:10vw;\r\n    background-color:rgb(0,123,255);\r\n    /*border-top:2px solid black;\r\n}\r\n.col{\r\n\r\n    text-align:center;\r\n    background-color:none;\r\n    /*min-height:2vw;\r\n   /* border-top:2px solid black;\r\n    border-right:2px solid black;\r\n    border-left:2px solid black;\r\n    border-bottom:2px solid black;\r\n}\r\n.row{\r\n\r\n    margin-top:1vw;\r\n    min-height:3vw;\r\n    background-color:none;\r\n    width:100%;\r\n}\r\na{\r\n\r\n    opacity:0;\r\n}\r\n#insta{\r\n\r\n    background-image:url(\"../../assets/img/insta.png\");\r\n    background-repeat:no-repeat;\r\n    background-size:cover;\r\n    background-position:center;\r\n    background-color:none;\r\n    background-size: contain;\r\n}\r\n#face{\r\n\r\n\r\n    background-image:url(\"../../assets/img/face.png\");\r\n    background-repeat:no-repeat;\r\n    background-size:cover;\r\n    background-position:center;\r\n    background-color:none;\r\n    background-size: contain;\r\n}\r\n#jgypk{\r\n\r\n    background-image:url(\"../../assets/img/jgypk.png\");\r\n    background-repeat:no-repeat;\r\n    background-size:cover;\r\n    background-position:center;\r\n    background-color:none;\r\n    background-size: contain;\r\n}*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxxQkFBcUI7QUFDekI7QUFDQTs7SUFFSSxZQUFZO0lBQ1oseUJBQWlCO0lBQWpCLHNCQUFpQjtJQUFqQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw4QkFBK0M7SUFDL0Msa0NBQWtDO0lBQ2xDLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isc0JBQXNCOztJQUV0Qjs7O3dDQUdvQztJQUNwQzt5QkFDcUI7O0FBRXpCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7QUFDQTs7Ozs7O0VBTUU7QUFDRjs7SUFFSSxxQkFBcUI7SUFDckI7Ozs7c0JBSWtCOztBQUV0QjtBQUNBOztJQUVJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsb0JBQW9CO0dBQ3JCOzs7Z0NBRzZCOztBQUVoQztBQUNBOztJQUVJLFNBQVM7QUFDYjtBQUNBOztJQUVJLGlCQUFpQjtBQUNyQjtBQUVBLGdDQUFnQztBQUNoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTBERSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1se1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6bm9uZTtcclxufVxyXG4uY29udGFpbmVyLWZsdWlke1xyXG5cclxuICAgIGhlaWdodDoxMDB2aDtcclxuICAgIHdpZHRoOm1heC1jb250ZW50O1xyXG4gICAgcG9zaXRpb246Y2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6MzB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuLi8uLi9hc3NldHMvaW1nL2JnLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6Zml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuICAgIC8qYm9yZGVyLXRvcDoxMHB4IHNvbGlkIGRhcmtncmVlbjtcclxuICAgIGJvcmRlci1yaWdodDoxMHB4IHNvbGlkIGRhcmtncmVlbjtcclxuICAgIGJvcmRlci1sZWZ0OjEwcHggc29saWQgIzMyQ0QzMjtcclxuICAgIGJvcmRlci1ib3R0b206MTBweCBzb2xpZCBkYXJrZ3JlZW47Ki9cclxuICAgIC8qanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyovXHJcbiBcclxufVxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIGZsb2F0OmNlbnRlcjtcclxufVxyXG4jbG9nb3tcclxuICAgIGhlaWdodDo1dnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOm5vbmU7XHJcbn1cclxuLyouZm9ybS1jb250cm9se1xyXG5cclxuICAgIGJvcmRlci10b3A6MnB4IHNvbGlkIGRhcmtncmV5O1xyXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgZGFya2dyZXk7XHJcbiAgICBib3JkZXItbGVmdDoycHggc29saWQgZGFya2dyZXk7XHJcbiAgICBib3JkZXItcmlnaHQ6MnB4IHNvbGlkIGRhcmtncmV5O1xyXG59Ki9cclxuLnJvd3tcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpub25lO1xyXG4gICAgLypib3JkZXItYm90dG9tOjJweCBzb2xpZCAjMzJDRDMyO1xyXG4gICAgYm9yZGVyLWxlZnQ6MnB4IHNvbGlkICMzMkNEMzI7XHJcbiAgICBib3JkZXItcmlnaHQ6MnB4IHNvbGlkICMzMkNEMzI7XHJcbiAgICBib3JkZXItdG9wOjJweCBzb2xpZCAjMzJDRDMyO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1JTsqL1xyXG4gICAgXHJcbn1cclxuLmNvbHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOm5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAvKiBib3JkZXItYm90dG9tOjJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1sZWZ0OjJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yaWdodDoycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItdG9wOjJweCBzb2xpZCBibGFjazsqL1xyXG4gICAgXHJcbn1cclxuI2t1bGRoZXRle1xyXG5cclxuICAgIG9wYWNpdHk6MTtcclxufVxyXG4ja3VsZHtcclxuXHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tRk9PVEVSLS0tLS0tLS0tLS0tLSovXHJcbi8qI2Zvb3RlcntcclxuICAgIFxyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpub25lO1xyXG4gICAgZmxvYXQ6Ym90dG9tO1xyXG4gICAgbWluLWhlaWdodDoxMHZ3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMCwxMjMsMjU1KTtcclxuICAgIC8qYm9yZGVyLXRvcDoycHggc29saWQgYmxhY2s7XHJcbn1cclxuLmNvbHtcclxuXHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6bm9uZTtcclxuICAgIC8qbWluLWhlaWdodDoydnc7XHJcbiAgIC8qIGJvcmRlci10b3A6MnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJpZ2h0OjJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1sZWZ0OjJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5yb3d7XHJcblxyXG4gICAgbWFyZ2luLXRvcDoxdnc7XHJcbiAgICBtaW4taGVpZ2h0OjN2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6bm9uZTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuYXtcclxuXHJcbiAgICBvcGFjaXR5OjA7XHJcbn1cclxuI2luc3Rhe1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9pbnN0YS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6bm9uZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG4jZmFjZXtcclxuXHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2ZhY2UucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOm5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuI2pneXBre1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9qZ3lway5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6bm9uZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufSovXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _user_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-login */ "./src/app/user-login.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(login, router) {
        this.login = login;
        this.router = router;
        this.loginModel = new _user_login__WEBPACK_IMPORTED_MODULE_3__["UserLogin"]("", "");
    }
    onSubmit() {
        //console.log("ez a loginmodel (logincomponent): " + this.loginModel.username + " " +this.loginModel.pwd);
        this.login.loginRequest(this.loginModel).subscribe(data => this.goToUrl(data), 
        /*backendről hiba: */ error => console.log("Hiba történt a belépés során! " + JSON.stringify(error)));
    }
    goToUrl(data) {
        if (data == "sikeres admin belépés!") {
            this.popUp = data + " " + this.loginModel.username + "!";
            window.alert(this.popUp);
            // window.location.href='http://localhost:4200/dashboard';
            this.router.navigate(['admin']);
            this.login.setLoggedIn(data);
        }
        else if (data == "sikeres user belépés!") {
            this.popUp = data + " " + this.loginModel.username + "!";
            window.alert(this.popUp);
            // window.location.href='http://localhost:4200/dashboard';
            this.router.navigate(['user']);
            this.login.setLoggedIn(data);
        }
        else {
            alert("Hiba történt bejelentkezés közben! : " + JSON.stringify(data));
        }
    }
    ngOnInit() {
    }
};
LoginComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/regisztral/regisztral.component.css":
/*!*****************************************************!*\
  !*** ./src/app/regisztral/regisztral.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid{\r\n\r\n\r\n    width:-webkit-max-content;\r\n\r\n\r\n    width:-moz-max-content;\r\n\r\n\r\n    width:max-content;\r\n    height:-webkit-max-content;\r\n    height:-moz-max-content;\r\n    height:max-content;\r\n    background-color:none;\r\n    background-image:url('bg.svg');\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-attachment:fixed;\r\n    background-size: cover;\r\n   /* border-top:2px solid black;\r\n    border-right:2px solid black;\r\n    border-bottom:2px solid black;\r\n    border-left:2px solid black;*/\r\n}\r\n.btn{\r\n\r\n    position:relative;\r\n    border-bottom:2px solid lightgray;\r\n}\r\n#back{\r\n\r\n    float:left;\r\n}\r\n#reg{\r\n\r\n    float:right;\r\n}\r\n.col{\r\n\r\n    align-content: center;\r\n   /* border-top:2px solid black;\r\n    border-right:2px solid black;\r\n    border-bottom:2px solid black;\r\n    border-left:2px solid black;*/\r\n}\r\n.form-group{\r\n\r\n    text-align:center;\r\n     border-bottom:3px solid lightgray;\r\n    /*border-right:1px solid lightgray;\r\n    border-bottom:1px solid lightgray;\r\n    border-left:1px solid lightgray;*/\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN6dHJhbC9yZWdpc3p0cmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztJQUdJLHlCQUFpQjs7O0lBQWpCLHNCQUFpQjs7O0lBQWpCLGlCQUFpQjtJQUNqQiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsOEJBQStDO0lBQy9DLGtDQUFrQztJQUNsQyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHNCQUFzQjtHQUN2Qjs7O2lDQUc4QjtBQUNqQztBQUNBOztJQUVJLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7QUFDQTs7SUFFSSxVQUFVO0FBQ2Q7QUFDQTs7SUFFSSxXQUFXO0FBQ2Y7QUFDQTs7SUFFSSxxQkFBcUI7R0FDdEI7OztpQ0FHOEI7QUFDakM7QUFDQTs7SUFFSSxpQkFBaUI7S0FDaEIsaUNBQWlDO0lBQ2xDOztxQ0FFaUM7QUFDckMiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3p0cmFsL3JlZ2lzenRyYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XHJcblxyXG5cclxuICAgIHdpZHRoOm1heC1jb250ZW50O1xyXG4gICAgaGVpZ2h0Om1heC1jb250ZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpub25lO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvYmcuc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDpmaXhlZDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgIC8qIGJvcmRlci10b3A6MnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJpZ2h0OjJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLWxlZnQ6MnB4IHNvbGlkIGJsYWNrOyovXHJcbn1cclxuLmJ0bntcclxuXHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkIGxpZ2h0Z3JheTtcclxufVxyXG4jYmFja3tcclxuXHJcbiAgICBmbG9hdDpsZWZ0O1xyXG59XHJcbiNyZWd7XHJcblxyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbn1cclxuLmNvbHtcclxuXHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgIC8qIGJvcmRlci10b3A6MnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJpZ2h0OjJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLWxlZnQ6MnB4IHNvbGlkIGJsYWNrOyovXHJcbn1cclxuLmZvcm0tZ3JvdXB7XHJcblxyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTozcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgLypib3JkZXItcmlnaHQ6MXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIGJvcmRlci1sZWZ0OjFweCBzb2xpZCBsaWdodGdyYXk7Ki9cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/regisztral/regisztral.component.ts":
/*!****************************************************!*\
  !*** ./src/app/regisztral/regisztral.component.ts ***!
  \****************************************************/
/*! exports provided: RegisztralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisztralComponent", function() { return RegisztralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signup.service */ "./src/app/signup.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");




let RegisztralComponent = class RegisztralComponent {
    constructor(signup) {
        this.signup = signup;
        this.userModel = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]('', '', '', '', '', '', '');
    }
    onSubmit() {
        this.signup.postRequest(this.userModel).subscribe(data => this.goToUrl(data), //console.log("data érték: " + data)
        //console.log("data érték: " + data)
        error => alert("Hiba történt " + error));
        // console.log("a beérkezett tömb: " + this.str);                                           //data => console.log('megjött az adat: ' +data),//this.goToUrl(),
        /*backend error*/ //error => console.log("Hiba a regisztráció során: " + error)
    }
    goToUrl(data) {
        this.popUp = data + " " + this.userModel + "!";
        alert(this.popUp);
        window.location.href = 'http://localhost:4200/login';
    }
    ngOnInit() {
    }
};
RegisztralComponent.ctorParameters = () => [
    { type: _signup_service__WEBPACK_IMPORTED_MODULE_2__["SignupService"] }
];
RegisztralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-regisztral',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./regisztral.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/regisztral/regisztral.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./regisztral.component.css */ "./src/app/regisztral/regisztral.component.css")).default]
    })
], RegisztralComponent);



/***/ }),

/***/ "./src/app/signup.service.ts":
/*!***********************************!*\
  !*** ./src/app/signup.service.ts ***!
  \***********************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SignupService = class SignupService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.url = "http://localhost/nyilvantart/index.php";
        this.tablaUrl = "http://localhost/nyilvantart/tablement.php";
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    //regisztráció->felhasználó küld
    postRequest(user) {
        return this.http.post(this.url, user, this.httpOptions);
    }
    //admin->tárgyak
    TablaKuld(userarray) {
        return this.http.post(this.tablaUrl, userarray);
    }
};
SignupService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SignupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SignupService);



/***/ }),

/***/ "./src/app/structure/footer/footer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/structure/footer/footer.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid{\r\n    \r\n    position:bottom;\r\n    background-color:none;\r\n    /*min-height:10vw;*/\r\n    background-color:rgb(0,123,255);\r\n    /*border-top:2px solid black;*/\r\n}\r\n.col{\r\n\r\n    text-align:center;\r\n    background-color:none;\r\n    min-height:2vw;\r\n   /* border-top:2px solid black;\r\n    border-right:2px solid black;\r\n    border-left:2px solid black;\r\n    border-bottom:2px solid black;*/\r\n}\r\n.row{\r\n\r\n    margin-top:1vw;\r\n    min-height:3vw;\r\n    background-color:none;\r\n    width:100%;\r\n}\r\na{\r\n\r\n    opacity:0;\r\n    font-size:2vw;\r\n}\r\n#insta{\r\n\r\n    background-image:url('insta.png');\r\n    background-repeat:no-repeat;\r\n    background-size:cover;\r\n    background-position:center;\r\n    background-color:none;\r\n    background-size: contain;\r\n}\r\n#face{\r\n\r\n    background-image:url('fb.png');\r\n    background-repeat:no-repeat;\r\n    background-size:cover;\r\n    background-position:center;\r\n    background-color:none;\r\n    background-size: contain;\r\n}\r\n#jgypk{\r\n\r\n    background-image:url('jgypk.png');\r\n    background-repeat:no-repeat;\r\n    background-size:cover;\r\n    background-position:center;\r\n    background-color:none;\r\n    background-size: contain;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RydWN0dXJlL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0IsOEJBQThCO0FBQ2xDO0FBQ0E7O0lBRUksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixjQUFjO0dBQ2Y7OzttQ0FHZ0M7QUFDbkM7QUFDQTs7SUFFSSxjQUFjO0lBQ2QsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7QUFDQTs7SUFFSSxTQUFTO0lBQ1QsYUFBYTtBQUNqQjtBQUNBOztJQUVJLGlDQUFxRDtJQUNyRCwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsd0JBQXdCO0FBQzVCO0FBQ0E7O0lBRUksOEJBQWtEO0lBQ2xELDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQix3QkFBd0I7QUFDNUI7QUFDQTs7SUFFSSxpQ0FBcUQ7SUFDckQsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL3N0cnVjdHVyZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gICAgXHJcbiAgICBwb3NpdGlvbjpib3R0b207XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOm5vbmU7XHJcbiAgICAvKm1pbi1oZWlnaHQ6MTB2dzsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMCwxMjMsMjU1KTtcclxuICAgIC8qYm9yZGVyLXRvcDoycHggc29saWQgYmxhY2s7Ki9cclxufVxyXG4uY29se1xyXG5cclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpub25lO1xyXG4gICAgbWluLWhlaWdodDoydnc7XHJcbiAgIC8qIGJvcmRlci10b3A6MnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJpZ2h0OjJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1sZWZ0OjJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkIGJsYWNrOyovXHJcbn1cclxuLnJvd3tcclxuXHJcbiAgICBtYXJnaW4tdG9wOjF2dztcclxuICAgIG1pbi1oZWlnaHQ6M3Z3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpub25lO1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG5he1xyXG5cclxuICAgIG9wYWNpdHk6MDtcclxuICAgIGZvbnQtc2l6ZToydnc7XHJcbn1cclxuI2luc3Rhe1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9pbnN0YS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6bm9uZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG4jZmFjZXtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvZmIucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOm5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuI2pneXBre1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9qZ3lway5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6bm9uZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/structure/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/structure/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/structure/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/structure/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/structure/navbarcomp/navbarcomp.component.css":
/*!***************************************************************!*\
  !*** ./src/app/structure/navbarcomp/navbarcomp.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar{\r\n\r\n\r\n    border-bottom:3px solid black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RydWN0dXJlL25hdmJhcmNvbXAvbmF2YmFyY29tcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7SUFHSSw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9zdHJ1Y3R1cmUvbmF2YmFyY29tcC9uYXZiYXJjb21wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xyXG5cclxuXHJcbiAgICBib3JkZXItYm90dG9tOjNweCBzb2xpZCBibGFjaztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/structure/navbarcomp/navbarcomp.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/structure/navbarcomp/navbarcomp.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarcompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarcompComponent", function() { return NavbarcompComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../login.service */ "./src/app/login.service.ts");



let NavbarcompComponent = class NavbarcompComponent {
    constructor(login) {
        this.login = login;
    }
    ngOnInit() {
    }
};
NavbarcompComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
];
NavbarcompComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbarcomp',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbarcomp.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/structure/navbarcomp/navbarcomp.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbarcomp.component.css */ "./src/app/structure/navbarcomp/navbarcomp.component.css")).default]
    })
], NavbarcompComponent);



/***/ }),

/***/ "./src/app/structure/navbardiak/navbardiak.component.css":
/*!***************************************************************!*\
  !*** ./src/app/structure/navbardiak/navbardiak.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0cnVjdHVyZS9uYXZiYXJkaWFrL25hdmJhcmRpYWsuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/structure/navbardiak/navbardiak.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/structure/navbardiak/navbardiak.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbardiakComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbardiakComponent", function() { return NavbardiakComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../login.service */ "./src/app/login.service.ts");



let NavbardiakComponent = class NavbardiakComponent {
    constructor(login) {
        this.login = login;
    }
    ngOnInit() {
    }
};
NavbardiakComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
];
NavbardiakComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbardiak',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbardiak.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/structure/navbardiak/navbardiak.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbardiak.component.css */ "./src/app/structure/navbardiak/navbardiak.component.css")).default]
    })
], NavbardiakComponent);



/***/ }),

/***/ "./src/app/targy.ts":
/*!**************************!*\
  !*** ./src/app/targy.ts ***!
  \**************************/
/*! exports provided: Targy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Targy", function() { return Targy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Targy {
    constructor(marka, tipus, db, eler, targy_id) { }
}


/***/ }),

/***/ "./src/app/user-login.ts":
/*!*******************************!*\
  !*** ./src/app/user-login.ts ***!
  \*******************************/
/*! exports provided: UserLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogin", function() { return UserLogin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UserLogin {
    constructor(username, pwd) { }
}


/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(neptun, firstName, lastName, username, pwd, email, teamName, id) { }
}


/***/ }),

/***/ "./src/app/user/igenyleseim/igenyleseim.component.css":
/*!************************************************************!*\
  !*** ./src/app/user/igenyleseim/igenyleseim.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid{\r\n  /*background-color:lightgreen;*/\r\n    height:100vh;\r\n  \r\n}\r\n.wrap{\r\n\r\n  min-height:100vw;\r\n  background-image:url('bg.svg');\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-attachment:fixed;\r\n  background-size: cover;\r\n\r\n}\r\n.cont-panel{\r\n\r\n  height:-webkit-fit-content;\r\n\r\n  height:-moz-fit-content;\r\n\r\n  height:fit-content;\r\n  width:-webkit-fit-content;\r\n  width:-moz-fit-content;\r\n  width:fit-content;\r\n  margin-left:40vw;\r\n}\r\n/*-------+ PANEL------*/\r\n.md-form{\r\n\r\n  margin-top:5vw;\r\n  display:-webkit-inline-box;\r\n  display:inline-flex;\r\n  width:100%;\r\n}\r\n#hozBtn{\r\n\r\n  border-radius: 45%;\r\n}\r\n.clk-pic{\r\nwidth:100%;\r\nheight:2vw;\r\n}\r\n/*-------------FORM--------------*/\r\n#targyhozzad{\r\n\r\n  position:relative;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  height:-webkit-fit-content;\r\n  height:-moz-fit-content;\r\n  height:fit-content;\r\n}\r\n.btn{\r\n  position: relative;\r\n  margin-left:3vw;\r\n  margin-top: auto;\r\n}\r\ntable{\r\n  margin-top: 3vw;\r\n  border-top:10px solid lightblue;\r\n  border-left:10px solid lightblue;\r\n  border-right:10px solid lightblue;\r\n  border-bottom:10px solid lightblue;\r\n  border-radius:5%;\r\n}\r\n/*--------------TABLE SZERKESZTÉSNÉL----------*/\r\n.szerk{\r\n\r\nmax-width:100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9pZ2VueWxlc2VpbS9pZ2VueWxlc2VpbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQStCO0lBQzdCLFlBQVk7O0FBRWhCO0FBQ0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLDhCQUFrRDtFQUNsRCxrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixzQkFBc0I7O0FBRXhCO0FBQ0E7O0VBRUUsMEJBQWtCOztFQUFsQix1QkFBa0I7O0VBQWxCLGtCQUFrQjtFQUNsQix5QkFBaUI7RUFBakIsc0JBQWlCO0VBQWpCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQSx1QkFBdUI7QUFDdkI7O0VBRUUsY0FBYztFQUNkLDBCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaO0FBQ0E7O0VBRUUsa0JBQWtCO0FBQ3BCO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsVUFBVTtBQUNWO0FBQ0Esa0NBQWtDO0FBQ2xDOztFQUVFLGlCQUFpQjtFQUNqQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGlDQUFpQztFQUNqQyxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0FBQ2xCO0FBQ0EsK0NBQStDO0FBQy9DOztBQUVBLGVBQWU7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvaWdlbnlsZXNlaW0vaWdlbnlsZXNlaW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JlZW47Ki9cclxuICAgIGhlaWdodDoxMDB2aDtcclxuICBcclxufVxyXG4ud3JhcHtcclxuXHJcbiAgbWluLWhlaWdodDoxMDB2dztcclxuICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9iZy5zdmcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OmZpeGVkO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG59XHJcbi5jb250LXBhbmVse1xyXG5cclxuICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XHJcbiAgd2lkdGg6Zml0LWNvbnRlbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6NDB2dztcclxufVxyXG4vKi0tLS0tLS0rIFBBTkVMLS0tLS0tKi9cclxuLm1kLWZvcm17XHJcblxyXG4gIG1hcmdpbi10b3A6NXZ3O1xyXG4gIGRpc3BsYXk6aW5saW5lLWZsZXg7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG4jaG96QnRue1xyXG5cclxuICBib3JkZXItcmFkaXVzOiA0NSU7XHJcbn1cclxuLmNsay1waWN7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoydnc7XHJcbn1cclxuLyotLS0tLS0tLS0tLS0tRk9STS0tLS0tLS0tLS0tLS0tKi9cclxuI3Rhcmd5aG96emFke1xyXG5cclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OmZpdC1jb250ZW50O1xyXG59XHJcbi5idG57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1sZWZ0OjN2dztcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG59XHJcbnRhYmxle1xyXG4gIG1hcmdpbi10b3A6IDN2dztcclxuICBib3JkZXItdG9wOjEwcHggc29saWQgbGlnaHRibHVlO1xyXG4gIGJvcmRlci1sZWZ0OjEwcHggc29saWQgbGlnaHRibHVlO1xyXG4gIGJvcmRlci1yaWdodDoxMHB4IHNvbGlkIGxpZ2h0Ymx1ZTtcclxuICBib3JkZXItYm90dG9tOjEwcHggc29saWQgbGlnaHRibHVlO1xyXG4gIGJvcmRlci1yYWRpdXM6NSU7XHJcbn1cclxuLyotLS0tLS0tLS0tLS0tLVRBQkxFIFNaRVJLRVNaVMOJU07DiUwtLS0tLS0tLS0tKi9cclxuLnN6ZXJre1xyXG5cclxubWF4LXdpZHRoOjEwMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/user/igenyleseim/igenyleseim.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/igenyleseim/igenyleseim.component.ts ***!
  \***********************************************************/
/*! exports provided: IgenyleseimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IgenyleseimComponent", function() { return IgenyleseimComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/login.service */ "./src/app/login.service.ts");
/* harmony import */ var _igeny__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../igeny */ "./src/app/igeny.ts");




let IgenyleseimComponent = class IgenyleseimComponent {
    constructor(igeny) {
        this.igeny = igeny;
        this.igenyHead = ['igényelt tárgy', 'tárgy mennyisége', 'igénylés időpontja', 'igénylés időtartama', 'igénylő', 'elbírált'];
        this.defElb = 'nem';
        this.dateTime = new Date();
        this.defDat = this.dateTime.toString();
        this.display = true;
        this.pluszIgeny = new _igeny__WEBPACK_IMPORTED_MODULE_3__["Igeny"]('', 0, '', '', '', '');
    }
    ngOnInit() {
        this.igenyLeker();
    }
    /*----------------PLUSZ GOMB (LENYÍLÁS)-----------------*/
    showMe() {
        if (this.display) {
            this.display = false;
        }
        else {
            this.display = true;
        }
    }
    igenyLeker() {
        this.igeny.getIgeny().subscribe((res) => {
            this.igenyArr = res;
            console.log('Visszajött igénylések: ' + this.igenyArr);
        }, (err) => {
            this.error = err;
            console.log('Hiba visszaérkezésnél: ' + this.error);
        });
    }
    /*-----------------ÚJ IGÉNY HOZZÁADÁSA---------------- */
    ujIgeny() {
        this.pluszIgeny.igeny_idopont = this.defDat;
        this.pluszIgeny.elbiralt = this.defElb;
        console.log('felküldésre: ' + JSON.stringify(this.pluszIgeny));
        this.igeny.igenyFel(this.pluszIgeny).subscribe((data) => {
            alert(JSON.stringify(data));
            this.ngOnInit();
        }, error => {
            alert('Hiba a visszaérkezésnél(Igény feltol): ' + error);
        });
    }
};
IgenyleseimComponent.ctorParameters = () => [
    { type: src_app_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
];
IgenyleseimComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-igenyleseim',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./igenyleseim.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/igenyleseim/igenyleseim.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./igenyleseim.component.css */ "./src/app/user/igenyleseim/igenyleseim.component.css")).default]
    })
], IgenyleseimComponent);



/***/ }),

/***/ "./src/app/user/targyakuser/targyakuser.component.css":
/*!************************************************************!*\
  !*** ./src/app/user/targyakuser/targyakuser.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid{\r\n    /*background-color:lightgreen;*/\r\n      height:100vh;\r\n  }\r\n  .wrap{\r\n\r\n    min-height:100vw;\r\n    background-image:url('bg.svg');\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-attachment:fixed;\r\n    background-size: cover;\r\n  }\r\n  .cont-panel{\r\n\r\n    height:-webkit-fit-content;\r\n\r\n    height:-moz-fit-content;\r\n\r\n    height:fit-content;\r\n    width:-webkit-fit-content;\r\n    width:-moz-fit-content;\r\n    width:fit-content;\r\n    margin-left:40vw;\r\n  }\r\n  table{\r\n    margin-top: 3vw;\r\n    border-top:10px solid lightblue;\r\n    border-left:10px solid lightblue;\r\n    border-right:10px solid lightblue;\r\n    border-bottom:10px solid lightblue;\r\n    border-radius:5%;\r\n }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci90YXJneWFrdXNlci90YXJneWFrdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO01BQzdCLFlBQVk7RUFDaEI7RUFDQTs7SUFFRSxnQkFBZ0I7SUFDaEIsOEJBQWtEO0lBQ2xELGtDQUFrQztJQUNsQyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHNCQUFzQjtFQUN4QjtFQUNBOztJQUVFLDBCQUFrQjs7SUFBbEIsdUJBQWtCOztJQUFsQixrQkFBa0I7SUFDbEIseUJBQWlCO0lBQWpCLHNCQUFpQjtJQUFqQixpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakMsa0NBQWtDO0lBQ2xDLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdGFyZ3lha3VzZXIvdGFyZ3lha3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6bGlnaHRncmVlbjsqL1xyXG4gICAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgfVxyXG4gIC53cmFwe1xyXG5cclxuICAgIG1pbi1oZWlnaHQ6MTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9iZy5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OmZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgLmNvbnQtcGFuZWx7XHJcblxyXG4gICAgaGVpZ2h0OmZpdC1jb250ZW50O1xyXG4gICAgd2lkdGg6Zml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDo0MHZ3O1xyXG4gIH1cclxuICB0YWJsZXtcclxuICAgIG1hcmdpbi10b3A6IDN2dztcclxuICAgIGJvcmRlci10b3A6MTBweCBzb2xpZCBsaWdodGJsdWU7XHJcbiAgICBib3JkZXItbGVmdDoxMHB4IHNvbGlkIGxpZ2h0Ymx1ZTtcclxuICAgIGJvcmRlci1yaWdodDoxMHB4IHNvbGlkIGxpZ2h0Ymx1ZTtcclxuICAgIGJvcmRlci1ib3R0b206MTBweCBzb2xpZCBsaWdodGJsdWU7XHJcbiAgICBib3JkZXItcmFkaXVzOjUlO1xyXG4gfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/user/targyakuser/targyakuser.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/targyakuser/targyakuser.component.ts ***!
  \***********************************************************/
/*! exports provided: TargyakuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargyakuserComponent", function() { return TargyakuserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/login.service */ "./src/app/login.service.ts");



let TargyakuserComponent = class TargyakuserComponent {
    constructor(serv) {
        this.serv = serv;
        this.targyHead = ['ID', 'márka', 'típus', 'DB', 'elérhető'];
    }
    ngOnInit() {
        this.targyLeker();
    }
    targyLeker() {
        this.serv.getTargy().subscribe((res) => {
            this.targyak = res;
            //console.log("visszajott targyak: " +JSON.stringify(this.targyak) + ""+typeof res)
        }, (err) => {
            this.error = err;
            //console.log("hiba: "+this.error)
        });
    }
};
TargyakuserComponent.ctorParameters = () => [
    { type: src_app_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
];
TargyakuserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-targyakuser',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./targyakuser.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/targyakuser/targyakuser.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./targyakuser.component.css */ "./src/app/user/targyakuser/targyakuser.component.css")).default]
    })
], TargyakuserComponent);



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 100%;\r\n}\r\n.container-fluid{\r\n\r\n    min-height:100vw;\r\n    background-image:url('bgdashboard.jpg');\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-attachment:fixed;\r\n    background-size: cover;\r\n}\r\np{\r\n\r\n    display:block;\r\n    position:relative;\r\n    color:blue;\r\n    margin-left:37vw;\r\n    margin-top:5vw;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0FBQ2Q7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsdUNBQXdEO0lBQ3hELGtDQUFrQztJQUNsQyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHNCQUFzQjtBQUMxQjtBQUNBOztJQUVJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5jb250YWluZXItZmx1aWR7XHJcblxyXG4gICAgbWluLWhlaWdodDoxMDB2dztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuLi8uLi9hc3NldHMvaW1nL2JnZGFzaGJvYXJkLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6Zml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbnB7XHJcblxyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgY29sb3I6Ymx1ZTtcclxuICAgIG1hcmdpbi1sZWZ0OjM3dnc7XHJcbiAgICBtYXJnaW4tdG9wOjV2dztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");



let UserComponent = class UserComponent {
    constructor(login) {
        this.login = login;
    }
    ngOnInit() {
    }
};
UserComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
];
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")).default]
    })
], UserComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nemet\Desktop\Szakmai gyak\projekt\nyilvantart\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map