import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import {Igeny} from '../../igeny';

@Component({
  selector: 'app-igenyles',
  templateUrl: './igenyles.component.html',
  styleUrls: ['./igenyles.component.css']
})
export class IgenylesComponent implements OnInit {

  igenyArr:Igeny[];
  igenyHead=['igényelt tárgy','tárgy mennyisége','igénylés időpontja','igénylés időtartama','igénylő','elbírált'];
  error;
  torlesre;
  editId;

  constructor(private ig:LoginService) { }

  igenyLeker(){

    this.ig.getIgeny().subscribe(

      (res:Igeny[])=>{

        this.igenyArr = res;
        
      },
      (err)=>{
        this.error = err;
        alert('Hiba visszaérkezésnél: '+this.error)
      }
    )
  }

  ngOnInit() {
    this.igenyLeker();
  }

  /*-------------------IGÉNY TÖRLÉSE-------------*/
  Del(igeny){

    //this.torlesre = event.target.value;
    this.torlesre = igeny;
    //console.log('(front)id '+this.torlesre);
    this.ig.igenyDel(this.torlesre).subscribe(

      (data)=>{

        alert(JSON.stringify(data))
        this.ngOnInit();
      },
      error => {

        alert('Hiba a visszaérkezésnél: '+error)
      }
    )
   }

   /*--------------------IGÉNY MÓDOSÍTÁSA---------- */
   Mod(val):number{

      if(val == this.editId){
  
        this.editId = 0;
      }else{
        this.editId = val;
      }
       return this.editId;
  
    }
    /*--------------------IGÉNYEK MENTÉSE---------- */
    Save(i:Igeny){

      console.log('tárgy küldésre : '+JSON.stringify(i));
      this.ig.igenyMod(i).subscribe(
        (data)=>{

          alert(data)
          this.ngOnInit();
        },
        error => {
  
          alert('Hiba tárgy frissítésnél: '+JSON.stringify(error))
        }
      )
    }

}
