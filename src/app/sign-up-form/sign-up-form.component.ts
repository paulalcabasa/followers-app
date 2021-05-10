import { UsernameValidators } from './username.validator';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent {

    form = new FormGroup({
      account: new FormGroup({
        username: new FormControl('',
          Validators.required,
          UsernameValidators.shouldBeUnique
        ),
        password: new FormControl('', Validators.required),
      })
    });

    login() {
      return this.form.setErrors({
        invalidLogin : true
      });
    }

    get username() {
      return this.form.get('account.username');
    }

}
