import { Component, OnInit } from '@angular/core';
import { IUser } from '../../iuser';
import { AbstractControl,  FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
// import { nameValidator } from '../../Custom Validators/name-exist';
import { passwordMatch } from '../../Custom Validators/passwardMatch';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userReg: FormGroup;
  userDta!: IUser;
  existEmail:string[]=[]

  constructor(private fBuild:FormBuilder) {
   this.existEmail=["alaa@.com","sara@.com","ali@.com"]
  this.userReg= fBuild.group({

  name: ['',[Validators.required, Validators.pattern('[A-Za-z]{4,}'),],
          // nameValidator(this.formSer)
],
  email: ['',[Validators.required,  this.emailValidator(this.existEmail)]],
  passward: ['',[Validators.required]],
  confirmPassward: ['',[Validators.required]],
  phone:this.fBuild.array(['']),
  address: this.fBuild.group({
    city: [''],
    street:[''],
  }),
  referal:[''],
  otherReferal:['']
 },{validators:passwordMatch})
  }

  get name(){
     return this.userReg.get('name')
  }

get email(){
  return this.userReg.get('email')
}

  get phoneNums(){
    return this.userReg.get('phone') as FormArray
  }

  get passward(){
    return this.userReg.get('passward')
  }

  get confirmPassward(){
    return this.userReg.get('confirmPassward')
  }


get referal(){
  return this.userReg.get('referal')
}


  submit(){
    // to save in IUser
    let userDta:IUser= this.userReg.value as IUser
    console.log(userDta);

  }

  addPhoneNum(event:any){
     this.phoneNums.push(new FormControl(''));
     event.target.style.display="none"
  }

  remPhoneNum(item:number, event:any){
    this.phoneNums.removeAt(item);
    // event.target.style.display="none"
  }

  showDiv(){
    if(this.referal?.value=="other"){
      this.userReg.get('otherReferal')?.addValidators([Validators.required])
    }
else{
  this.userReg.get('otherReferal')?.clearValidators()
}
this.userReg.get('otherReferal')?.updateValueAndValidity()

  }


emailValidator(existEmail:string[]):ValidatorFn{

  return (control:AbstractControl): ValidationErrors | null=>{
    let emailVal :string= control.value;
    let errValidate= {'existEmail': {'value': emailVal}}
    if(emailVal.length==0) return null

    let foundEmail=this.existEmail.includes(emailVal);
    return foundEmail ? errValidate : null
    // return (emailVal.includes('[0-9]')) ? null : errValidate
  }
}


  ngOnInit(): void {

  }

}
