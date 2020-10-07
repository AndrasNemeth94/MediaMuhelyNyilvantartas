import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './structure/footer/footer.component';
import { RegisztralComponent } from './regisztral/regisztral.component';
import { AdminmainComponent } from './admin/adminmain/adminmain.component';
const appRoutes = [
    { path: '', redirectTo: 'login', pathMatch: "full" },
    { path: 'login', component: LoginComponent },
    { path: 'regisztral', component: RegisztralComponent },
    { path: 'adminmain', component: AdminmainComponent }
];
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            LoginComponent,
            FooterComponent,
            RegisztralComponent,
            AdminmainComponent,
        ],
        imports: [
            BrowserModule,
            HttpClientModule,
            AppRoutingModule,
            FormsModule,
            RouterModule.forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map