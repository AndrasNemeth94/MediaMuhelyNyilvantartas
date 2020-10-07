import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule,HttpClientJsonpModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './structure/footer/footer.component';
import { RegisztralComponent } from './regisztral/regisztral.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import {AuthGuard} from './auth.guard';
import { TargyakComponent } from './admin/targyak/targyak.component';
import { DiakokComponent } from './admin/diakok/diakok.component';
import { IgenylesComponent } from './admin/igenyles/igenyles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarcompComponent } from './structure/navbarcomp/navbarcomp.component';
import {CdkTableModule} from '@angular/cdk/table';
import { DiakszerkComponent } from './admin/diakok/diakszerk/diakszerk.component';
import {NavbardiakComponent} from './structure/navbardiak/navbardiak.component';
import { IgenyleseimComponent } from './user/igenyleseim/igenyleseim.component';
import { TargyakuserComponent } from './user/targyakuser/targyakuser.component';


const appRoutes : Routes =[
  {path:'' ,redirectTo:'login' ,pathMatch : "full"},
  {path:'login',component:LoginComponent},
  {path:'regisztral', component:RegisztralComponent},
  
  {path:'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path:'targyak', component: TargyakComponent,canActivate: [AuthGuard]},
  {path:'diakok', component: DiakokComponent,canActivate: [AuthGuard]},
  {path:'igenyles', component: IgenylesComponent,canActivate: [AuthGuard]},
  {path:'diakszerk', component: DiakszerkComponent,canActivate: [AuthGuard]},

  {path:'user', component: UserComponent, canActivate: [AuthGuard]},
  {path:'igenyleseim', component:IgenyleseimComponent,canActivate:[AuthGuard]},
  {path:'targyakuser', component:TargyakuserComponent,canActivate:[AuthGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    RegisztralComponent,
    UserComponent,
    AdminComponent,
    TargyakComponent,
    DiakokComponent,
    IgenylesComponent,
    NavbarcompComponent,
    DiakszerkComponent,
    NavbardiakComponent,
    IgenyleseimComponent,
    TargyakuserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpClientJsonpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    CdkTableModule
  ],

  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
