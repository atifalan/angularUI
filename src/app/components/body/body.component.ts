import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  isAddPlayerOpen = false;
  showWarning = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  addPlayer() {
    this.isAddPlayerOpen = !this.isAddPlayerOpen;
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;


    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    } else {
      this.showWarning = true;
    }
  }

  onExit() {
    this.isAddPlayerOpen = false;
    this.showWarning = false;
  }
}
