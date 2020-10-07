import { Component, OnInit } from '@angular/core';
import { Targy } from '../../targy';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-targyak',
  templateUrl: './targyak.component.html',
  styleUrls: ['./targyak.component.css']
})
export class TargyakComponent implements OnInit {

  targyHead=['ID','márka','típus','DB','elérhető'];
  igen_nem =['igen','nem'];
  valasz:string;
  targyak:Targy[];
  ujTargy = new Targy("","",0,"");
  display = true;
  error;
  torlesre:number;
  editId;
  targyMent= new Targy("","",0,"");

  constructor(private serv:LoginService, private router:Router) { }

  ngOnInit() {

        this.targyLeker();

  }

  /*----------------RÁDIÓGOMBOK---------------------------*/
  valaszValt(event:any){

    this.valasz = event.target.value;
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
/*----------------ÚJ TÁRGY ELKÜLD-----------------*/
  targyHozza(){
   console.log('frontról: '+JSON.stringify(this.ujTargy));
    this.serv.targyFel(this.ujTargy).subscribe(

      (data)=>{

        alert("A " +JSON.stringify(data) +" tárgy felkerült a listára!")//console.log("Ez jött fornton: "+JSON.stringify(data)),
        this.ngOnInit();
      },
      (error) => {

        console.log("Hiba frontnál!" +JSON.stringify(error))
      })

  }

/*--------------TÁRGYAK LEKÉRÉSE------------------*/
  targyLeker(){

    this.serv.getTargy().subscribe(
 
       (res : Targy[]) =>{
         this.targyak = res;
         //console.log("visszajott targyak: " +JSON.stringify(this.targyak) + ""+typeof res)
       },
       (err) =>{
 
         this.error = err;
         //console.log("hiba: "+this.error)
       }
 
     );
   }
   /*-------------------TÁRGYAK TÖRLÉSE-------------*/
   Del(id){

    //this.torlesre = event.target.value;
    this.torlesre = id;
    console.log('id '+this.torlesre);
    this.serv.targyDel(this.torlesre).subscribe(

      (data)=>{

        alert(data)
        this.ngOnInit();
      },
      error => {

        alert('Hiba a visszaérkezésnél: '+error)
      }
    )
   }

   /*--------------------TÁRGYAK MÓDOSÍTÁSA---------- */
   Mod(val):number{

      if(val == this.editId){
  
        this.editId = 0;
      }else{
        this.editId = val;
      }
       return this.editId;
  
    }
    /*--------------------TÁRGYAK MENTÉSE---------- */
    Save(i:Targy){

      console.log('tárgy küldésre : '+JSON.stringify(i));
      this.serv.targyMod(i).subscribe(
        (data)=>{

          alert(JSON.stringify(data))
          this.ngOnInit();
        },
        error => {
  
          alert('Hiba tárgy frissítésnél: '+JSON.stringify(error))
        }
      )
    }
}
