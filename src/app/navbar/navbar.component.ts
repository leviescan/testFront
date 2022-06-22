
import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 
  

  constructor() { }

  ngOnInit(): void {

   
  }

  actMe(){

    $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  }



}
