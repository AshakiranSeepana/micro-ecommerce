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
public form = this.fb.group({
  userName: ['', [Validators.required, Validators.minLength(5)]],
  password: ['', [Validators.required, Validators.minLength(4)]]
});

constructor(){}
ngOnInit(): void {
  this.form.markAllAsTouched();
  
}
loginSubmit() {
  const getvalues =this.form?.controls;
  if(this.form.invalid){
   this.form.markAllAsTouched(); // show errors
    return;
  }
  if(getvalues.userName?.value == 'Ashakiran'  
    && getvalues.password?.value ==="Ashakiran@123"){
      console.log("success login***");
      this.router.navigate(['/edashboarddisplay']);
    } else{
      alert('User login Details Wrong'); // need  Changes  Alert  Design
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
