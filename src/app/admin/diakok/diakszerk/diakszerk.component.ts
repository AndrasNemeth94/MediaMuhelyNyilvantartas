import { Component, OnInit } from '@angular/core';
import {User} from '../../../user';
import { Router } from '@angular/router';
import { LoginService } from '../../../login.service';

@Component({
  selector: 'app-diakszerk',
  templateUrl: './diakszerk.component.html',
  styleUrls: ['./diakszerk.component.css']
})
export class DiakszerkComponent implements OnInit {
  
  szerkModel= new User("","","","","","","");
  constructor() { }

  ngOnInit() {
  }

}
