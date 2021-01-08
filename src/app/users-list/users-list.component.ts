import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../global-data.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(public globalDataService: GlobalDataService) { }

  ngOnInit(): void {
    this.globalDataService.getUsersList().subscribe((userList) => {      
      this.globalDataService.__filteredUsersList = userList;
    });
  }

}
