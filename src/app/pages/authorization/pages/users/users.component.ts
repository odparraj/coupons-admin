import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  searchKey: string;
  data = [];
  constructor() { }

  ngOnInit(){
    this.data = this.users;
  }
  searchClear() {
    this.searchKey = "";
    this.data = this.users;
    this.searchByKey();
  }

  searchByKey() {
    this.data =[];
    for(var i=0;i< this.users.length;i++){
      var fields = ['name','email'];
      var user = this.users[i];
      var append = false;
      for (var j = 0; j<fields.length;j++){
        if(user[fields[j]].search(this.searchKey) != -1){
          append = true;
        }
      }
      if(append){
        this.data.push(user);
      }
    }
  }

  addUser(){

  }

  users = [
    {"name": "Leanne Graham","email": "Sinwecere@april.biz"},
    {"name": "Leanne Graham","email": "Sincere@april.biz"},
    {"name": "das Graham","email": "Sincasdere@april.biz"},
    {"name": "sadgf Graham","email": "Sinasdscere@april.biz"},
    {"name": "ds Graham","email": "Sincasdaere@april.biz"},
    {"name": "sfsd Graham","email": "Siasdncere@april.biz"},
    {"name": "Leanfdse Graham","email": "asdSincere@april.biz"},
    {"name": "Leanfne Graham","email": "fghSffgincere@april.biz"},
    {"name": "f Grsdaham","email": "fgfghfSincere@april.biz"},
    {"name": "Leansasdfdne Graham","email": "Sfghfincere@april.biz"},
    {"name": "asdLeanne Graham","email": "fgggSincere@april.biz"},
  ]

}

