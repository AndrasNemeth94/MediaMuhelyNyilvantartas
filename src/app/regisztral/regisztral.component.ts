import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { User } from '../user';
import { stringify } from 'querystring';

@Component({
  selector: 'app-regisztral',
  templateUrl:'./regisztral.component.html',
  styleUrls: ['./regisztral.component.css']
})
export class RegisztralComponent implements OnInit {

  
  userModel = new User('','','','','','','');
  popUp;
  constructor(private signup :  SignupService) { 
  }
  
 onSubmit(){
  
    this.signup.postRequest(this.userModel).subscribe(

        data =>  this.goToUrl(data),//console.log("data érték: " + data)
        error => alert("Hiba történt " + error)
        
    )

       
  }

  goToUrl(data){

     this.popUp = data+" "+this.userModel+"!";
    alert(this.popUp);
    window.location.href='http://localhost:4200/login';
  }

  ngOnInit() {


  }

}
