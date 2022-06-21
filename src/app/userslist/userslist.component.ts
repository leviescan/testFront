import { Router } from '@angular/router';
import { User } from './../user.model';

import { Component, OnInit } from '@angular/core';
import { toArray } from 'rxjs';
import { ServiceUsersService } from '../service-users.service';


@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {


  query: string = '';

  constructor( private serviceUser:ServiceUsersService, private router:Router) { }

  usuarios:User[]=[];

  



  ngOnInit(): void {

    this.readUsers();
  }

  readUsers() {

  return  this.serviceUser.getUsers()
    .subscribe(
      re => {
        this.usuarios = re;
        console.log(this.usuarios)
      },
      er => console.log(er)

    )
  }

  removeUser(id:any){

    this.serviceUser.deleteUsers(id)
    .subscribe(
      re => {
        this.readUsers();
        console.log(this.usuarios)
      },
      er => console.log(er)

    )

  }

}
