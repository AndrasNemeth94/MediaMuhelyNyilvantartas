
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Igeny } from '../../igeny';

@Component({
  selector: 'app-igenyleseim',
  templateUrl: './igenyleseim.component.html',
  styleUrls: ['./igenyleseim.component.css']
})
export class IgenyleseimComponent implements OnInit {

   igenyHead=['igényelt tárgy','tárgy mennyisége','igénylés időpontja','igénylés időtartama','igénylő','elbírált'];
   igenyArr:Igeny[];

   defElb ='nem';
   dateTime = new Date();
   defDat = this.dateTime.toString();

   error;
   torlesre;
   editId;
   display=true;
   pluszIgeny=new Igeny('',0,'','','','');
   
  constructor(private igeny:LoginService) { }

  ngOnInit() {

    this.igenyLeker();
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
  
  igenyLeker(){

    this.igeny.getIgeny().subscribe(

      (res:Igeny[])=>{

        this.igenyArr = res;
        console.log('Visszajött igénylések: '+ this.igenyArr);
      },
      (err)=>{
        this.error = err;
        console.log('Hiba visszaérkezésnél: '+this.error)
      }
    )
  }
/*-----------------ÚJ IGÉNY HOZZÁADÁSA---------------- */
ujIgeny(){

  this.pluszIgeny.igeny_idopont = this.defDat;
  this.pluszIgeny.elbiralt = this.defElb;
  console.log('felküldésre: '+JSON.stringify(this.pluszIgeny));
  this.igeny.igenyFel(this.pluszIgeny).subscribe(

    (data)=>{

      alert(JSON.stringify(data))
      this.ngOnInit();
    },
    error => {

      alert('Hiba a visszaérkezésnél(Igény feltol): '+error)
    }
  )

}

 

}
