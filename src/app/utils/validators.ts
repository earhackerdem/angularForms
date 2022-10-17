import { AbstractControl } from '@angular/forms';

export class MyValidators {

  static isPriceValid(control: AbstractControl) {
    const value = control.value;
    console.log(value);
    if (value > 10000) {
      return { price_invalid: true };
    }
    return null;
  }

  static validPassword(control: AbstractControl) {
    const value = control.value;
    if (!containsNumber(value)) {
      return { invalid_password: true };
    }
    return null;
  }

  static matchPasswords(control: AbstractControl) {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;
    console.log(password)
    console.log(confirmPassword)
    if (password === confirmPassword) {
      return null;

    }
    return { match_password: true };
  }

}

function containsNumber(value: string) {
  return value.split('').find(value => isNumber(value)) !== undefined;
}

function isNumber(value: string) {
  return !isNaN(parseInt(value, 10));
}
