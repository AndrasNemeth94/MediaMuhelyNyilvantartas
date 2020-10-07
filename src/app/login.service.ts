import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse,HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';
import { UserLogin } from './user-login';
import { Observable,throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from './user';
import { Targy } from './targy';
import {Igeny} from './igeny';

//authguardhoz!
interface MyData{

  success:boolean,
  message:string
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost/nyilvantart/index2.php";
  urlDiak = "http://localhost/nyilvantart/table.php";
  urlNeptun = "http://localhost/nyilvantart/neptunplus.php";
  urlTabla = "http://localhost/nyilvantart/tablazat.php";
  urlIgeny = "http://localhost/nyilvantart/igeny.php";
  urlTargyFel = "http://localhost/nyilvantart/targyAdmin.php";
  urlTargyTorol = "http://localhost/nyilvantart/targyTorol.php";
  urlTargyMod = "http://localhost/nyilvantart/targyMod.php";

  urlUserDel = "http://localhost/nyilvantart/userDel.php";
  urlUserMod = "http://localhost/nyilvantart/userMod.php";

  urlIgenyDel = "http://localhost/nyilvantart/igenyDel.php";
  urlIgenyMod = "http://localhost/nyilvantart/igenyMod.php";

  urlIgenyFel = "http://localhost/nyilvantart/igenyFel.php";

  tabla:Targy[]
  diak:User[];
  igeny:Igeny[];
  neptunmess;

  constructor(private router: Router,private http:HttpClient) { }
  
  //hibakezelés
  private handleError(error:HttpErrorResponse){

    console.log('Hiba! :' +error);

    //user üzenet
    return throwError('Hiba! Valami félrement..');
  }
  //authguard
    loggedInStatus = false;

    // Http Options
   options = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
  loginRequest(login:UserLogin): Observable<string>{

    //console.log("ezt dobja a loginservice: " + login.username +" "+ login.pwd);
    return this.http.post<string>(this.url,login,this.options);

  }
//login komponens
  setLoggedIn(value :string){

    if(value == "sikeres admin belépés!" || value == "sikeres user belépés!"){

      this.loggedInStatus = true;

    }else{

      this.loggedInStatus = false;
    }
    
  }
  //auth guard!
  get isLoggedIn(){

      return this.loggedInStatus;
  }

  logoutUser(){

    const logOut = false;
    this.http.post<boolean>(this.url,logOut).subscribe(

      data => alert("sikeres kijelentkezés!"),
      //error => console.log("Hibás logout " +JSON.stringify(error))
    );
    this.router.navigate(['login']);
  }

  //diakok 
  getDiak():Observable<User[]>{

   return this.http.get<any>(`${this.urlDiak}/list`).pipe(
      map((res) => {

      this.diak = res['data'];
      return this.diak;
     }),
     catchError(this.handleError));
  }
//diakok komponent
  sendNeptun(neptun):Observable<string>{

    return this.http.post<string>(this.urlNeptun,neptun);

  }

  //tárgyak lekérérse
  getTargy():Observable<Targy[]>{

   return this.http.get<Targy[]>(`${this.urlTabla}/list`).pipe(

        map((res)=> {

          this.tabla = res['data'];
          return this.tabla;
        }),
    catchError(this.handleError));

  }

  //igénylés lekérése

  getIgeny():Observable<Igeny[]>{

    return this.http.get<Igeny[]>(`${this.urlIgeny}/list`).pipe(

      map((res) =>{
      
        this.igeny = res['data'];
        return this.igeny;
    }),
    catchError(this.handleError));
  }

  //tárgy hozzáad (Admin)
  targyFel(targyfel:Targy):Observable<Targy>{

     return this.http.post<Targy>(this.urlTargyFel,targyfel);
  }
  //tágy töröl (Admin)
  targyDel(key:number):Observable<string>{

    return this.http.post<any>(this.urlTargyTorol,key);

  }

  //tárgy módosít (Admin)
  targyMod(mod:Targy):Observable<string>{

    return this.http.post<any>(this.urlTargyMod,mod);
  }

  //Felhasználó töröl (Admin)
  userDel(id):Observable<string>{

    return this.http.post<any>(this.urlUserDel,id);
  }

  //Felhasználó módosít (Admin)
  userMod(mod:User):Observable<string>{

    return this.http.post<any>(this.urlUserMod,mod);
  }

    //Igény töröl (Admin)
    igenyDel(id):Observable<any>{

      return this.http.post<any>(this.urlIgenyDel,id);
    }
  
    //Igény módosít (Admin)
    igenyMod(mod:Igeny):Observable<string>{
  
      return this.http.post<any>(this.urlIgenyMod,mod);
    }
    //új igény hozzáad (User)
    igenyFel(val:Igeny):Observable<string>{

      return this.http.post<any>(this.urlIgenyFel,val);
    }

}
