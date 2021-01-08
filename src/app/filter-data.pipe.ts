import { Pipe, PipeTransform } from '@angular/core';
import { GlobalDataService } from './global-data.service';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {

  constructor(public globalDataService: GlobalDataService) { }
  transform(usersList: [],data:string) {
    //return null;
    
    
    return usersList.filter((list: any) => {
      
      return list.title.toLowerCase().includes(data);
    });
  }
}
