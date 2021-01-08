import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../global-data.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  constructor(public globalDataService:GlobalDataService) { }

  ngOnInit(): void {
  }

}
