import { Component } from '@angular/core';
import { CarDetails } from '../cars';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent {

  // 'cars_obj' is an object of 'CarsDetails'  
  cars_obj: CarDetails = {
    carName:'',
    carType:'',
    carColor:'',
    carNumber:'',
    carSeats:''
  };

  public numOfSeats = [1,2,4,5,6,8];
  public typeOfCar = ['Sedan','SUV','Sport','Electric','Convertible'];

  submitCarDetails() {
    console.log("Car Name : "     +this.cars_obj.carName,
                "\nCar Number : " +this.cars_obj.carNumber,
                "\nCar Color : "  +this.cars_obj.carColor,
                "\nCar Seats : "  +this.cars_obj.carSeats,
                "\nCar Type : "   +this.cars_obj.carType
              );
  }
  
}
