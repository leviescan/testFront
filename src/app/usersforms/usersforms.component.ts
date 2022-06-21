
import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceUsersService } from '../service-users.service';

@Component({
  selector: 'app-usersforms',
  templateUrl: './usersforms.component.html',
  styleUrls: ['./usersforms.component.css']
})
export class UsersformsComponent implements OnInit {

  constructor( private userService: ServiceUsersService, private router:Router, private activatedRoute:ActivatedRoute) { }


  /* user:User []=[name: string= '';
    description:string ='';
    image:string ='';
    price:number = 0;];
     */
  
  user:User ={
    id: 0,
    name: '',
    description: '',
    image: '',
    
  };

  edit: boolean = false;

  ngOnInit(): void {

  const  params =  this.activatedRoute.snapshot.params
  if (params){
    this.userService.getUser(params['id'])
    .subscribe(
      re => {console.log(re);
      this.user=re;
      this.edit = true},
      er => {console.log(er)
        
      }
    );

  }
  }

  submitUser() {

    this.userService.createUsers(this.user)
    .subscribe(
      re => {console.log(re);
      this.router.navigate(['/'])},
      er => {console.log(er)
        
      }
    );
  }

  updateUser(){

    delete this.user.updated_at;
    this.userService.updateUsers(this.user.id, this.user)
    .subscribe(
      re => {console.log(re);
      this.router.navigate(['/'])},
      er => {console.log(er)
        
      }
    );
  }

}
