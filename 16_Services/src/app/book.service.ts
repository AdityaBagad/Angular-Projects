import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  // Write method in service class which returns array of batch details
  GetBookDetails()
  {
    return [
              {"Name":"OS",   "Price":500, "Author":"AAA", "Pages":200},
              {"Name":"DBMS", "Price":750, "Author":"BBB", "Pages":300},
              {"Name":"WEB",  "Price":250, "Author":"CCC", "Pages":400},
              {"Name":"ML",   "Price":900, "Author":"DDD", "Pages":500}
          ];
  }
  
}
