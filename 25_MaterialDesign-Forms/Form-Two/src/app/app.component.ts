import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

export interface City {
  city_name: string;
  city_value: string;
}

export interface SeatTypes {
  seat_name: string;
  seat_value: string;
}

export class DatepickerMinMaxExample {
  minDate = new Date(2018, 0, 1);
  maxDate = new Date(2020, 0, 1);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  citySource = new FormControl('', [Validators.required]);
  cityDest = new FormControl('', [Validators.required]);

  cities: City[] = [
    {city_name: 'NewYork' , city_value: 'NEW YORK'},
    {city_name: 'London'  , city_value: 'LONDON'},
    {city_name: 'Tokyo'   , city_value: 'TOKYO'},
    {city_name: 'Oslo'    , city_value: 'OSLO'},
    {city_name: 'Moscow'   , city_value: 'MOSCOW'},
  ];

  seats: SeatTypes[] = [
    {seat_name: 'First Class'     , seat_value: 'FIRST CLASS'},
    {seat_name: 'Business Class'  , seat_value: 'BUSINESS CLASS'},
    {seat_name: 'Economy Class'   , seat_value: 'ECONOMIC CLASS'}
  ]

  public source: string ='';
  public destination: string='';
  public startDate: string='';
  public endDate: string='';
  public seat: string='';

  start(event: MatDatepickerInputEvent<Date>) {
    this.startDate = event.value.toLocaleDateString();
  }

  end(event: MatDatepickerInputEvent<Date>) {
    this.endDate = event.value.toLocaleDateString();
  }

  public searchFlights()
  {
    
    console.log("Source : "+this.source);
    console.log("Destination : "+this.destination);
    console.log("Start Date : "+this.startDate);
    console.log("End Date : "+this.endDate);
    console.log("Seat Type : "+this.seat);
    
  }

}
