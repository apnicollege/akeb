import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser, User } from 'src/app/model/user.model';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  user : User;
  constructor(private _registerService: RegisterService){

  }


  ngOnInit(): void {
    window.scroll(0,0);
    this._registerService.user$.subscribe(_data=>{
      this.user = _data;
  });
  }



}
