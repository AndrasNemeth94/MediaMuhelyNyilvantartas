import { Component, OnInit } from '@angular/core';
import { Targy } from '../../targy';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-targyakuser',
  templateUrl: './targyakuser.component.html',
  styleUrls: ['./targyakuser.component.css']
})
export class TargyakuserComponent implements OnInit {

  targyHead=['ID','márka','típus','DB','elérhető'];
  targyak:Targy[];
  error;
  targyID;


  constructor(private serv:LoginService) { }

  ngOnInit() {
    this.targyLeker();

  }

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


}
