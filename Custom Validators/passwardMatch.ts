import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export const passwordMatch: ValidatorFn =
  (frmGroup: AbstractControl): ValidationErrors | null => {
    let passControl= frmGroup.get('passward');
    let confirmPassControl= frmGroup.get('confirmPassward');
    if(!passControl || !confirmPassControl || !passControl.value || !confirmPassControl.value)
      return null;

    let valErr={'UnmatchedPassword': {'pass': passControl?.value, 'confrim': confirmPassControl?.value}}
    return (passControl?.value==confirmPassControl?.value)? null : valErr;
  }


