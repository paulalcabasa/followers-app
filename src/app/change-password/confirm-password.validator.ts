import { ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';

export function isMatched(password: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if(password != control.value) {
            return {
                isMatched : true
            };
        }
        else {
            return null;
        }
    };
}

