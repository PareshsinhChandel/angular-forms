import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { noSpacevalidation } from './Validator/validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'reactive_form';

  registrationForm:FormGroup=new FormGroup({
    // firsrName:new FormControl("",[Validators.required,noSpacevalidation]),
    firsrName:new FormControl("",[Validators.required,noSpacevalidation.customValidation]),
    // lastName:new FormControl("",[Validators.required,noSpacevalidation]),
    lastName:new FormControl("",[Validators.required,noSpacevalidation.customValidation]),
    email:new FormControl("",[Validators.required,Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'
)]),
    userName:new FormControl("",[Validators.required,Validators.minLength(6)]),
    dob:new FormControl("",Validators.required),
    gender:new FormControl("",Validators.required),
    address:new FormControl("",Validators.required),
    country:new FormControl("",Validators.required),
    city:new FormControl("",Validators.required),
    region:new FormControl("",Validators.required),
    pincode:new FormControl("",Validators.required),
    skill:new FormControl("",Validators.required),
  })

  onFormSubmit(){
    console.log(this.registrationForm); 
  }

  ngOnInit(): void {
    this.onFormSubmit;
    this.registrationForm.valid;
    
  }
}
