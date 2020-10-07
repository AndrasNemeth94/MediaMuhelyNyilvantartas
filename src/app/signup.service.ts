import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './user';




@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url ="http://localhost/nyilvantart/index.php";
  tablaUrl = "http://localhost/nyilvantart/tablement.php";

  
  constructor(private router: Router,private http : HttpClient) { }


   // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

//regisztráció->felhasználó küld
  postRequest(user:User):Observable<JSON>{

    return this.http.post<JSON>(this.url,user,this.httpOptions);
  }

  //admin->tárgyak
  TablaKuld(userarray:User[]):Observable<string>{

    return this.http.post<any>(this.tablaUrl,userarray);
  }

}
