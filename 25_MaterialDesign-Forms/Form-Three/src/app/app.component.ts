import { Component } from '@angular/core';

export interface NumberOfSeats {
  value: number;
  viewValue: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  seats: NumberOfSeats[] = [
    {value:2, viewValue:2},
    {value:4, viewValue:4},
    {value:5, viewValue:5},
    {value:6, viewValue:6},
    {value:8, viewValue:8}
  ];

  favoriteSeason: string;
  seasons: string[] = ['Sedan', 'SUV', 'Sport Car', 'Hatchback'];
}
