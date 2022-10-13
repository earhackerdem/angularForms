import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
    // this.nameField.valueChanges
    //   .subscribe(value => console.log(value));
    // this.form.valueChanges
    //   .subscribe(value => console.log(value));
  }

  getNameValue() {
    console.log(this.nameField.value);
  }

  get nameField() {
    return this.form.get('fullName.name');
  }

  get lastNameField() {
    return this.form.get('fullName.lastName');
  }

  get emailField() {
    return this.form.get('email');
  }

  get phoneField() {
    return this.form.get('phone');
  }

  get colorField() {
    return this.form.get('color');
  }

  get dateField() {
    return this.form.get('date');
  }

  get ageField() {
    return this.form.get('age');
  }

  get categoryField() {
    return this.form.get('category');
  }

  get tagField() {
    return this.form.get('tag');
  }

  get agreeField() {
    return this.form.get('agree');
  }

  get genderField() {
    return this.form.get('gender');
  }

  get zoneField() {
    return this.form.get('zone');
  }

  get preferencesField() {
    return this.form.get('preferences');
  }

  get newsLetterField() {
    return this.form.get('newsLetter');
  }

  get isNameFieldValid() {
    return this.nameField.touched && this.nameField.valid;
  }

  get isNameFieldInvalid() {
    return this.nameField.touched && this.nameField.invalid;
  }

  get isNewsLetterFieldValid() {
    return this.newsLetterField.touched && this.newsLetterField.valid;
  }

  get isNewsLetterFieldInvalid() {
    return this.newsLetterField.touched && this.newsLetterField.invalid;
  }

  get isPhoneFieldInvalid() {
    return this.phoneField.touched && this.phoneField.invalid;
  }

  get isEmailFieldInvalid() {
    return this.emailField.touched && this.emailField.invalid;
  }

  get isAgeFieldInvalid() {
    return this.ageField.touched && this.ageField.invalid;
  }

  get isLastNameFieldInvalid() {
    return this.lastNameField.touched && this.lastNameField.invalid;
  }

  save(event) {
    if (this.form.valid) {
      console.log(this.form.value)
    } else {
      this.form.markAllAsTouched();
    }

  }

  private buildForm() {
    this.form = this.formBuilder.group({
      fullName: this.formBuilder.group({
        name: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^([Aa-zA-ZáéíóúÁÉÍÓÚÑñ]{2,}\s?){2,4}$/)]],
        lastName: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^([Aa-zA-ZáéíóúÁÉÍÓÚÑñ]{2,}\s?){2,4}$/)]]
      }),
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      color: ['#000000'],
      date: [''],
      age: [25, [Validators.required, Validators.min(18), Validators.max(100)]],
      category: ['category-2'],
      tag: [''],
      agree: [false, [Validators.requiredTrue]],
      gender: [''],
      zone: [''],
      preferences: [''],
      newsLetter: ['', [Validators.required, Validators.email]]

    });
  }

}
