import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent { 
  // title = 'Profile';
  ProfileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.ProfileForm = this.fb.group({
      name: ['', Validators.required],
      importantNote: ['', Validators.required],
      comment1: ['', Validators.required],
      comment2: ['', Validators.required],
      example: ['', Validators.required],
      question: ['', Validators.required],
      answer: ['', Validators.required],
      instruction: ['', Validators.required],
      friendlyQuestion: ['', Validators.required],
      outputName: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.ProfileForm.valid) {
      const formValues = this.ProfileForm.value;
      console.log('Successfully submitted:', formValues);
    } else {
      this.ProfileForm.markAllAsTouched();
      console.log('Form is invalid');
    }
  }
}
