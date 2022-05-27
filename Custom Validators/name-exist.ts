// import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms"
// import { map, Observable } from "rxjs"
// // import { FormServiceService } from "../Services/form-service.service"


// export function nameValidator(formSer:FormServiceService):AsyncValidatorFn{
//     return (control:AbstractControl):Observable<ValidationErrors> =>{

//       return formSer.checkUserName(control.value).pipe(
//         map((res:boolean)=>{
//           res? {nameAlreadyExisted : true}  :null
//         })
//       )
//     }
//   }
