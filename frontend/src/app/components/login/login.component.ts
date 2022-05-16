import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:FormGroup;

  constructor() { }

  ngOnInit() {
    this.user = new FormGroup({
      user: new FormControl('',[Validators.required, Validators.minLength(2)]),
      pass: new FormControl('',Validators.required),
      check: new FormControl('',Validators.required)
    });

  }

  onSubmit(){
    console.log("Button submit desde login.component.ts")
  }

}
