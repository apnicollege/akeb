import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { RegisterService } from 'src/app/service/register.service';
import { ComboBoxComponent, DropDownListComponent, FilteringEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { Query } from '@syncfusion/ej2-data';
import { ActivatedRoute, Router } from '@angular/router';
import { EmitType } from '@syncfusion/ej2-base';
import { GridColumnStyleBuilder } from '@angular/flex-layout/grid/typings/column/column';
@Component({
  selector: 'app-verify-registration',
  templateUrl: './verify-registration.component.html',
  styleUrls: ['./verify-registration.component.css']
})
export class VerifyRegistrationComponent implements OnInit {

  user : User;
  registrationForm: FormGroup;
  webinarId: string;

  constructor(private _registerService: RegisterService, private route: Router,
    private actRoute: ActivatedRoute) { }


  ngOnInit(): void {
    window.scroll(0,0);
    this.webinarId = this.actRoute.snapshot.params.wid;
    this._registerService.user$.subscribe(_data=>{
        this.user = _data;

    });

    this.registrationForm = new FormGroup(
      {
        email: new FormControl(this.user.email, [Validators.required,
          Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),

          ]),
          fName: new FormControl(this.user.fName,[Validators.required]),
          mName: new FormControl(this.user.mName,[Validators.required]),
          lName: new FormControl(this.user.lName,[Validators.required]),
          dob: new FormControl(this.user.dob,[Validators.required]),
          contact: new FormControl(this.user.contact,[Validators.required]),
          qualification: new FormControl(this.user.qualification,[Validators.required]),
          regionalCouncil: new FormControl(this.user.regionalCouncil,[Validators.required]),
          localCouncil: new FormControl(this.user.localCouncil,[Validators.required]),
          university: new FormControl(this.user.university,[Validators.required]),
          college: new FormControl(this.user.college,[Validators.required]),
        }
    );
  }

  OnFormSubmit(){
      this.user = this.registrationForm.value;

      this._registerService.postUser(this.user, this.webinarId).subscribe(data=>{
        this.user = data;
        console.log(this.user);
        this._registerService.user$.next(this.user);
        this.route.navigateByUrl("/webinar-questionaire/" + this.user.id + '/' + this.webinarId);
      });

  }


  public qualification: string[] = [
    'No Formal Education',
    'Below Standard 8th',
    'Below Standard 10th',
    'Standard 10th/SSC',
    'Upto Standard 12th/HSC',
    'Diploma/Certificate/Vocational Course',
    'First Year (Bachelor Degree)',
    'Second Year (Bachelor Degree)',
    'Third Year (Bachelor Degree)',
    'Graduate (Bachelor Degree)',
    'Post Graduate (Master Degree)',
    'Professional Degree (CA, MBBS, CFA etc.)',
    'PHD'
];

public country: { [key: string]: Object }[] = [
  { CountryName: 'Western India', CountryId: '827' },
  { CountryName: 'Central Northern Eastern India', CountryId: '838' },
  { CountryName: 'Northern Eastern Gujarat', CountryId: '839' },
  { CountryName: 'Southern India', CountryId: '840' },
  { CountryName: 'Northern Saurashtra', CountryId: '841' },
  { CountryName: 'Southern Saurashtra', CountryId: '842' }
];
// define the state DropDownList data
public state: { [key: string]: Object }[] = [
  { StateName: 'North Mumbai', CountryId: '827', StateId: '828' },
  { StateName: 'Goa', CountryId: '827', StateId: '843' },
  { StateName: 'Pune ', CountryId: '827', StateId: '844' },
  { StateName: 'South Mumbai', CountryId: '827', StateId: '845' },
  { StateName: 'Thane ', CountryId: '827', StateId: '846' },
  { StateName: 'Vapi Sanjan', CountryId: '827', StateId: '847' },

  { StateName: 'Nagpur', CountryId: '838', StateId: '855' },
  { StateName: 'Raipur-Kolkata', CountryId: '838', StateId: '856' },
  { StateName: 'Yavatmal', CountryId: '838', StateId: '857' },

  { StateName: 'Ahmedabad', CountryId: '839', StateId: '855' },
  { StateName: 'Kutch', CountryId: '839', StateId: '856' },
  { StateName: 'Sidhpur', CountryId: '839', StateId: '857' },
  { StateName: 'Surat', CountryId: '839', StateId: '857' },

  { StateName: 'Bengaluru', CountryId: '840', StateId: '857' },
  { StateName: 'Hyderabad', CountryId: '840', StateId: '857' },
  { StateName: 'Secunderabad', CountryId: '840', StateId: '857' },

  { StateName: 'Bhavnagar', CountryId: '841', StateId: '857' },
  { StateName: 'Jamnagar', CountryId: '841', StateId: '857' },
  { StateName: 'Mahuva', CountryId: '841', StateId: '857' },
  { StateName: 'Rajkot', CountryId: '841', StateId: '857' },
  { StateName: 'Surendranagar-Botad', CountryId: '841', StateId: '857' },

  { StateName: 'Amreli-Una', CountryId: '842', StateId: '857' },
  { StateName: 'Chitravad-Maliya Hatina', CountryId: '842', StateId: '857' },
  { StateName: 'Junagadh', CountryId: '842', StateId: '857' },
  { StateName: 'Porbandar', CountryId: '842', StateId: '857' }


];

   // maps the country columns to fields property
   public countryFields: Object = { value: 'CountryId', text: 'CountryName' };
   // maps the state columns to fields property
   public stateFields: Object = { value: 'StateId', text: 'StateName' };

   public countryWaterMark: string = 'Select Regional Council';
   public stateWaterMark: string = 'Select City of Residence';

   @ViewChild('countryList')
   // country DropDownList instance
   public countryObj: DropDownListComponent;
   @ViewChild('stateList')
   // state DropDownList instance
   public stateObj: DropDownListComponent;


   public onChange1(): void {
    this.stateObj.enabled = true;
    // query the data source based on country DropDownList selected value
    let tempQuery: Query = new Query().where('CountryId', 'equal', this.countryObj.value);
    this.stateObj.query = tempQuery;
    // clear the existing selection.
    this.stateObj.text = null;
    // bind the property changes to state DropDownList
    this.stateObj.dataBind();

}


public dateValue: Date = new Date("05/17/1990");

// defined the array of data
public universityData: string[] =
['IIIT Nuzvid, Rajiv Gandhi University of Knowledge Technologies - Andhra Pradesh',
'State Board of Technical Education & Training - Andhra Pradesh',
'Assam Higher Secondary Education Council - Assam',
'Bihar School Examination Board - Bihar',
'Chhattisgarh Board of Secondary Education- Raipur - Chhatisgarh'];
public collegeData: string[] = ['BVP College of Engg', 'Tukdoji Maharaj Management Science',
'St. Xaviers Institute', 'Rai soni College of Engineering'];

@ViewChild('collegeList')
   // state DropDownList instance
   public collegeListObj: ComboBoxComponent;

public onUniChange(){
  this.collegeListObj.enabled = true;
}
 }
