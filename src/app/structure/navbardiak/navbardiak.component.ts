import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import { IgenyleseimComponent } from '../../user/igenyleseim/igenyleseim.component';
import { TargyakuserComponent } from '../../user/targyakuser/targyakuser.component';

@Component({
  selector: 'app-navbardiak',
  templateUrl: './navbardiak.component.html',
  styleUrls: ['./navbardiak.component.css']
})
export class NavbardiakComponent implements OnInit {

  constructor(private login:LoginService) { }

  ngOnInit() {
  }

}
