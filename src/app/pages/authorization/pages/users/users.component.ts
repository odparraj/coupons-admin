import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { UserModalComponent } from '../../components/user-modal/user-modal.component';
import { Observable, of } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  searchKey: string;
  data = [];
  users: Observable<any>;
  constructor(private dialogService: NbDialogService, private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.getUsers().pipe(
      flatMap((data) => {
        return of(data['data']);
      })
    );
    //this.data = this.users;
  }

  searchClear() {
    //this.searchKey = '';
    //this.data = this.users;
    //this.searchByKey();
  }

  /* searchByKey() {
    this.data = [];
    for (let i = 0; i < this.users.length; i++) {
      const fields = ['name', 'email'];
      const user = this.users[i];
      let append = false;
      for (let j = 0; j < fields.length; j++) {
        if (user[fields[j]].search(this.searchKey) !== -1) {
          append = true;
        }
      }
      if (append) {
        this.data.push(user);
      }
    }
  }
  names = [];
  addUser() {
    this.dialogService.open(UserModalComponent, {
      context: {
        title: 'This is a title passed to the dialog component',
      },
    });
  } */


  /* users = [
    {'name': 'Leanne Graham', 'email': 'Sinwecere@april.biz'},
    {'name': 'Leanne Graham', 'email': 'Sincere@april.biz'},
    {'name': 'das Graham', 'email': 'Sincasdere@april.biz'},
    {'name': 'sadgf Graham', 'email': 'Sinasdscere@april.biz'},
    {'name': 'ds Graham', 'email': 'Sincasdaere@april.biz'},
    {'name': 'sfsd Graham', 'email': 'Siasdncere@april.biz'},
    {'name': 'Leanfdse Graham', 'email': 'asdSincere@april.biz'},
    {'name': 'Leanfne Graham', 'email': 'fghSffgincere@april.biz'},
    {'name': 'f Grsdaham', 'email': 'fgfghfSincere@april.biz'},
    {'name': 'Leansasdfdne Graham', 'email': 'Sfghfincere@april.biz'},
    {'name': 'asdLeanne Graham', 'email': 'fgggSincere@april.biz'},
  ]; */

}

