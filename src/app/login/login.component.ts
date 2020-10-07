import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { UserLogin } from '../user-login';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginModel = new UserLogin("","");
popUp;

  constructor(private login: LoginService, private router:Router ) { }

 onSubmit(){
   
    //console.log("ez a loginmodel (logincomponent): " + this.loginModel.username + " " +this.loginModel.pwd);

    this.login.loginRequest(this.loginModel).subscribe(

      data => this.goToUrl(data),
    /*backendről hiba: */  error =>console.log("Hiba történt a belépés során! "+ JSON.stringify(error))
      
    )
      
  }

  goToUrl(data){

    if(data == "sikeres admin belépés!"){

     this.popUp = data+" "+this.loginModel.username+"!";
       window.alert(this.popUp);
     // window.location.href='http://localhost:4200/dashboard';
     this.router.navigate(['admin']);
     this.login.setLoggedIn(data);

    }else if(data == "sikeres user belépés!"){

     
      this.popUp = data+" "+this.loginModel.username+"!";
       window.alert(this.popUp);
     // window.location.href='http://localhost:4200/dashboard';
     this.router.navigate(['user']);
     this.login.setLoggedIn(data);
    }else{

       alert("Hiba történt bejelentkezés közben! : " +JSON.stringify(data));
    }
    
 }

  ngOnInit() {

  }

}
