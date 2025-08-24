import { Component,OnInit,OnDestroy,inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './user-login.html',
  styleUrl: './user-login.scss'
})
export class UserLogin implements OnInit ,OnDestroy  {
private fb =inject(FormBuilder);
private router =inject(Router);
public form =this.fb.group(
  {
    userName :['',Validators.required,Validators.minLength(5)],
    password :['',Validators.required,Validators.minLength(4)]
  }
);
constructor(){}
ngOnInit(): void {
  this.form.markAllAsTouched();
  ///this.getEnterValidationCheck();
  console.log("ngOnint***");
}
loginSubmit() {
  console.log("login Submit ***");
  if(this.form.invalid){
   this.form.markAllAsTouched(); // show errors
    return;
  }
}
getEnterValidationCheck(){
this.form?.controls?.userName?.valueChanges.subscribe(userN =>{
  console.log("userName changes");
});
}
ngOnDestroy(): void {
    console.log("ngOnDestroy***");
}


}
