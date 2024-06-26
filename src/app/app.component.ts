import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ReactFormProject';
  submitted = false;
  formData: any;

  frm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z]+$'),
    ]),
    lastname: new FormControl('', [
      Validators.maxLength(4),
      Validators.required,
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', Validators.required),
    dept: new FormControl('', Validators.required),
    isverified: new FormControl(false),
  });

  onSubmit() {
    if (this.frm.valid) {
      this.submitted = true;
      this.formData = this.frm.value;
    }
  }
}