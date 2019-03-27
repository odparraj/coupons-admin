import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<Users>('/api/users');
  }

  getUsersFilter(filter:string){
    return this.http.get<Users>(`/api/users?${filter}`);
  }
}

export interface Users{
  data: any;
  paginate: any;
}
