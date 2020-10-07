import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-navbarcomp',
  templateUrl: './navbarcomp.component.html',
  styleUrls: ['./navbarcomp.component.css']
})
export class NavbarcompComponent implements OnInit {

  constructor(private login:LoginService) { }

  ngOnInit() {
  }

}
