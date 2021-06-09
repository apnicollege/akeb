import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Questionaire, User } from 'src/app/model/user.model';
import { RegisterService } from 'src/app/service/register.service';
import { DropDownListComponent, DropDownListModel } from '@syncfusion/ej2-angular-dropdowns';
import { Query } from '@syncfusion/ej2-data';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-webinar-questionaire',
  templateUrl: './webinar-questionaire.component.html',
  styleUrls: ['./webinar-questionaire.component.css']
})
export class WebinarQuestionaireComponent implements OnInit {

  user : User;
  registrationForm: FormGroup;
  userId: number;
  webinarId : number;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  q7: string;
  q8: string;
  questionaire : Questionaire ={
    q1: '',q2: '',q3: '',q4: '',q5: '',q6: '',q7: '',q8: '',
    a1: '',a2: '',a3: '',a4: '',a5: '',a6: '',a7: '',a8: '',
    userId: 0,webinarId: 0
  };
  constructor(private _registerService: RegisterService, private route: Router,
    private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.q1="When are you planning to go abroad for Higher Studies?";
    this.q2="Which is your preferred country for pursuing Studies Abroad?";
    this.q3="What best describes you?";
    this.q4="Have you attended any Career program held by the Aga Khan Education Board for India?";
    this.q5="Your expectations from this Webinar Series";
    this.q6="";
    this.q7="";
    this.q8="Would you like to receive regular updates via Email from AKEB Canada /India on information relevant to this topic?";

    this.questionaire.q1 = this.q1;
    this.questionaire.q2 = this.q2;
    this.questionaire.q3 = this.q3;
    this.questionaire.q4 = this.q4;
    this.questionaire.q5 = this.q5;
    this.questionaire.q6 = this.q6;
    this.questionaire.q7 = this.q7;
    this.questionaire.q8 = this.q8;
    this.userId = this.actRoute.snapshot.params.id;
    this.webinarId = this.actRoute.snapshot.params.wid;
    this.questionaire.userId = this.userId;
    this.questionaire.webinarId = this.webinarId;

    this._registerService.user$.subscribe(_data=>{
        this.user = _data;
    });

    this.registrationForm = new FormGroup(
      {

          a1: new FormControl('',[Validators.required]),
          a2: new FormControl('',[Validators.required]),
          a3: new FormControl('',[Validators.required]),
          a4: new FormControl('',[Validators.required]),
          a5: new FormControl(''),
          a6: new FormControl(''),
          a7: new FormControl(''),
          a8: new FormControl('Yes',[Validators.required])
        }
    );



  }

  OnFormSubmit(){

      this.questionaire.a1 = this.registrationForm.value.a1;
      this.questionaire.a2 = this.registrationForm.value.a2;
      this.questionaire.a3 = this.registrationForm.value.a3;
      this.questionaire.a4 = this.registrationForm.value.a4;
      this.questionaire.a5 = this.registrationForm.value.a5;
      this.questionaire.a6 = this.registrationForm.value.a6;
      this.questionaire.a7 = this.registrationForm.value.a7;
      this.questionaire.a8 = this.registrationForm.value.a8;

      this.questionaire.a1 = this.questionaire.a1.toString();
      this.questionaire.a2 = this.questionaire.a2.toString();
      this.questionaire.a3 = this.questionaire.a3.toString();
      this.questionaire.a4 = this.questionaire.a4.toString();
      this.questionaire.a5 = this.questionaire.a5.toString();
      this.questionaire.a6 = this.questionaire.a6.toString();
      this.questionaire.a7 = this.questionaire.a7.toString();
      this.questionaire.a8 = this.questionaire.a8.toString();

      this._registerService.postQuestionaire(this.questionaire).subscribe(data=>{
          this.route.navigateByUrl('/finish');
      });


  }


  public a1List: string[] = ['Not Sure, Still Evaluating',
  'This Year', 'Next 1-2 Years', 'Next 2-3 Years', 'Already Studying Abroad'];


public a2List: { [key: string]: Object }[] = [
  { Id: 'Canada', Game: 'Canada' },
  { Id: 'NewZealand', Game: 'NewZealand' },
  { Id: 'Australia', Game: 'Australia' },
  { Id: 'Germany', Game: 'Germany' },
  { Id: 'UK', Game: 'UK' },
  { Id: 'USA', Game: 'USA' },

];

public a3List: string[] = ['Student',
  'Working Professional', 'Parent', 'Currently Not Working'];



public a4List: { [key: string]: Object }[] = [
  { Id: 'Rise: Reach for the stars', Game: 'Rise: Reach for the stars' },
  { Id: 'Education Development Program', Game: 'Education Development Program' },
  { Id: 'Rise: Tertiary Scholarship Program', Game: 'Rise: Tertiary Scholarship Program' },
  { Id: 'Rise: Trendsetter', Game: 'Rise: Trendsetter' },

];


// map the appropriate columns to fields property
public fields: object = {text: 'Game', value: 'Id'};
// set the placeholder to MultiSelect input element
public waterMark: string = 'Please specify or select from the list. Multi select is enabled';
// set the type of mode for how to visualized the selected items in input element.
public box : string = 'Box';
public autocompleteData: string[] = ['Yes', 'No'];
public dropdownValue: string = 'Yes';
public dropDownListModel: DropDownListModel = {
  dataSource: this.autocompleteData
};
}
