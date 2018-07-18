import { Component } from '@angular/core';

@Component({
  selector: 'app-submitform',
  templateUrl: './submitform.component.html',
  styleUrls: ['./submitform.component.css']
})
export class SubmitformComponent{

  public message: string;

  public StudName: string;
  public StudAddress: string;
  public StudCollege: string;
  public StudGender: string;
  public StudPhone: string;
  public StudEmail: string;

  gender = ['Male' , 'Female'];

  public submitForm()
  {
    console.log(this.StudName,
                this.StudAddress,
                this.StudCollege,
                this.StudGender,
                this.StudPhone,
                this.StudEmail);

    this.message = 'Form Submitted Successfully';
  }
}
