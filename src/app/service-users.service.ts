import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { toArray } from 'rxjs';
import { User } from './user.model';



@Injectable({
  providedIn: 'root'
})
export class ServiceUsersService {
  createUser(user: User) {
    throw new Error('Method not implemented.');
  }

restUrl: string = 'http://localhost:8000';

  constructor( private http: HttpClient) { }

  getUsers(query=''){

  return  this.http.get<User[]>(this.restUrl+'/api/personaje');
  }

  getUser(id:string){

    return  this.http.get<User>(`${this.restUrl}/api/personaje/${id}`);
  
  }

  createUsers(user:User){

    return  this.http.post<User>(`${this.restUrl}/api/personaje/`, user);
  
  }

  updateUsers(id:string, user:User){

    return  this.http.put<User>(`${this.restUrl}/api/personaje/${id}`, user);
  
  }

  deleteUsers(id:string){

    return  this.http.delete<User>(`${this.restUrl}/api/personaje/${id}`);
  
  }
}
