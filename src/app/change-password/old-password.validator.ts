import { ValidationErrors, AbstractControl } from '@angular/forms';

export class OldPasswordValidator {
    static shouldBeSame(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const oldPassword = '1234';
                if (control.value != oldPassword) {
                    resolve({shouldBeSame : true});
                }
                else {
                    resolve(null);
                }
            }, 2000);

        });


    }
}
