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
    if (password === confirmPassword) {
      return null;

    }
    return { match_password: true };
  }

  static validRange(control: AbstractControl) {
    const startOfRange = control.get('inicioRango').value;
    const endOfRange = control.get('finRango').value;
    if (endOfRange > startOfRange && (endOfRange - startOfRange > 100)) {
      console.log('caso 1 diferencia de',endOfRange - startOfRange)
      return { invalid_range: true };
    } else if (endOfRange < startOfRange && (startOfRange - endOfRange > 100)) {
      console.log('caso 2 diferencia de',startOfRange - endOfRange)
      console.log('start of range',startOfRange)
      console.log('end of range',endOfRange)
      return { invalid_range: true };
    }
    return null;
  }

}

function containsNumber(value: string) {
  return value.split('').find(value => isNumber(value)) !== undefined;
}

function isNumber(value: string) {
  return !isNaN(parseInt(value, 10));
}
