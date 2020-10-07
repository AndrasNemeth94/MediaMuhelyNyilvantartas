import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import { SignupService } from '../../signup.service';
import {User} from '../../user';
import {MatTableModule} from '@angular/material/table'; 
import { R3TargetBinder } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diakok',
  templateUrl: './diakok.component.html',
  styleUrls: ['./diakok.component.css']
})
export class DiakokComponent implements OnInit {

diakHead = ['neptun','keresztnév','vezetéknév','jelszó','felhasználónév','csapatnév'];
ShowEditTable:boolean = false;
editId;
diak:User[];
error;
display =true;
nep:string;
torlesre;
 
  constructor(private router: Router,private serv: LoginService,private kuld:SignupService) { }
  

  ngOnInit() {

     this.getDiak2();
  }
/*------------------------FELHASZNÁLÓ LEKÉRÉSE---------- */
  getDiak2():void{

    this.serv.getDiak().subscribe(

      (res : User[]) =>{
        this.diak = res;
      },
      (err) =>{

        this.error = err;
      } 
    );
  }
/*----------------PLUSZ GOMB (LENYÍLÁS)-----------------*/
  showMe(){
      if(this.display)
      {
          this.display = false;
      }else{
          this.display = true;
      }
  }
/*---------------ÚJ NEPTUNKÓD HOZZÁADÁSA---------------- */
  nepSave(event:any):string{
    this.nep = event.target.value;
    return this.nep;
  }
  /*------------ÚJ DIÁK HOZZÁADÁSA---------------------------*/
  ujDiak(){
    //console.log("küldés előtt nep: "+typeof(this.nep));
    this.serv.sendNeptun(this.nep).subscribe(

      (data)=>{

        alert('Neptunkód felvéve!');
        this.ngOnInit();
      },
      error => {
  
        alert('Hiba a visszaérkezésnél(user töröl): '+error)
      }
    );
  }
  /*---------------TÁBLÁZAT ELEMEINEK SZERKESZTHEŐSÉGE----------*/
  Editable(val):number{

    if(val == this.editId){

      this.editId = 0;
    }else{
      this.editId = val;
    }
     return this.editId;

  }
  /*----------------FELHASZNÁLÓ MÓDOSÍT--------------------------- */
  Mod(val):number{

    if(val == this.editId){

      this.editId = 0;
    }else{
      this.editId = val;
    }
     return this.editId;

  }
 /*----------------FELHASZNÁLÓ TÖRÖL--------------------------- */
 Del(id){

  //this.torlesre = event.target.value;
  this.torlesre = id;
  console.log('id '+this.torlesre);
  this.serv.userDel(this.torlesre).subscribe(

    (data)=>{

      alert('Sikeres törlés!')
      this.ngOnInit();
    },
    error => {

      alert('Hiba a visszaérkezésnél(user töröl): '+error)
    }
  )
 }
 /*----------------FELHASZNÁLÓ MENT--------------------------- */
 Save(i:User){

  //this.modDiak = event.target.value;
  console.log('Felhasználó küldésre : '+JSON.stringify(i));
  this.serv.userMod(i).subscribe(
    (data)=>{

      alert(JSON.stringify(data))
      this.ngOnInit();
    },
    error => {

      alert('Hiba user frissítésnél: '+JSON.stringify(error))
    }
  )
}


}
