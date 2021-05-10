import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export class PasswordValidators {
    static validOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const oldPassword = '1234';
                if (control.value !== oldPassword) {
                    resolve({invalidOldPassword : true});
                }
                else {
                    resolve(null);
                }
            }, 2000);

        });
    }

    static passwordsShouldMatch(group: AbstractControl): ValidationErrors | null   {

        const newPassword = group.get('newPassword')?.value;
        const confirmPassword = group.get('confirmPassword')?.value;

        return newPassword === confirmPassword ? null : { passwordsShouldMatch: true };
        // if(c.get('newPassword') || c.get('confirmPassword')){
        //     if(c.get('newPassword')!.value !== c.get('confirmPassword')!.value) {
        //         return { passwordsShouldMatch : true };
        //     }
        // }
        // if( newPassword.value !== confirmPassword.value)
        //     return { passwordsShouldMatch : true };


       // return null;
    }
}
