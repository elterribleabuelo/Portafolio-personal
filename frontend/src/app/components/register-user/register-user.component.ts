import { Component, OnInit } from '@angular/core';
import { RegisterUsersService } from 'src/app/services/register-users.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
  providers:[RegisterUsersService]
})
export class RegisterUserComponent implements OnInit {

  RegisterUser:FormGroup;

  constructor(
    private _registerUsersService:RegisterUsersService
  ) { }

  ngOnInit() {

    this.RegisterUser = new FormGroup({
      username:new FormControl(''),
      password:new FormControl(''),
      confirmation:new FormControl(''),
      email:new FormControl('')
    })
  }

  onSubmit(){
      this._registerUsersService.SaveDatabaseUser(this.RegisterUser.value).subscribe(
      response => {
        console.log("Respuesta desde Django:",response);
      },error => {
        console.log("Error desde Django:",error);
      }
    )
  }

}
