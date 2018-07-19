import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  // Add Characteristics which are required in Form
  feedbackForm: FormGroup;
  
  post:any;
  
  stud_name: string='';
  stud_feedback: string='';
  
  // Use dependency injection for FormBuilder
  constructor(private fb: FormBuilder)
  {
    this.validateForm();
  }

  public validateForm() 
  {
    this.feedbackForm = this.fb.group({
      'stud_name': [null,Validators.required],
      'stud_feedback': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])]
    })
  }

  // Copy the data from html to our class characteristics
  public sendFeedback(post)
  {
    this.stud_name = post.stud_name;
    this.stud_feedback = post.stud_feedback;
  }

}
