import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  // Create an Array to hold the information of the Books
  public books_info = [];

  // Create an Instance of Service in Constructor
  constructor(private _bookService: BookService) { }

  // Call the service method GetBookDetails()
  ngOnInit() {
    this.books_info = this._bookService.GetBookDetails();
  }

  // Columns of our table
  displayedColumns: string[] = ['Name', 'Price', 'Author', 'Pages'];
  
}
