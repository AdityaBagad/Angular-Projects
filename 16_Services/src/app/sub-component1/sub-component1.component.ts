import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-sub-component1',
  templateUrl: './sub-component1.component.html',
  styleUrls: ['./sub-component1.component.css']
})
export class SubComponent1Component implements OnInit {

  // Create an Array to hold the information of the Books
  public books_info = [];

  // Create an Instance of Service in Constructor
  constructor(private _bookService: BookService) { }

  // Call the service method GetBookDetails()
  ngOnInit() {
    this.books_info = this._bookService.GetBookDetails();
  }

}
