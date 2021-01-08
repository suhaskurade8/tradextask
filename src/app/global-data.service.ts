import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {

  // search box variable
  __searchBox: string = "";

  __selectedUser: string = "No user selected...";
  
  __filteredUsersList: any = [];
  constructor(private httpClient: HttpClient) { }

  public getUsersList() {
    return this.httpClient.get('http://jsonplaceholder.typicode.com/posts');
  }
}
