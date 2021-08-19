import { BrowserModule } from '@angular/platform-browser';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

/* Components */
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { VerifyRegistrationComponent } from './components/verify-registration/verify-registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WebinarsComponent } from './components/webinars/webinars.component';
import { WebinarDetailsComponent } from './components/webinar-details/webinar-details.component';
import {TextBoxModule} from '@syncfusion/ej2-angular-inputs';
 import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { ComboBoxModule, DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { MaskedTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { WebinarQuestionaireComponent } from './components/webinar-questionaire/webinar-questionaire.component';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { ComboBoxService, InPlaceEditorAllModule } from '@syncfusion/ej2-angular-inplace-editor';
import { CollegeComponent } from './components/college/college.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    RegisterComponent,
    LogInComponent,
    VerifyRegistrationComponent,
    DashboardComponent,
    WebinarsComponent,
    WebinarDetailsComponent,
    WebinarQuestionaireComponent,
    CollegeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    TextBoxModule,
    DatePickerAllModule,
    DropDownListAllModule,
    NumericTextBoxAllModule,
    MaskedTextBoxModule,
    MultiSelectModule,
    InPlaceEditorAllModule,
    ComboBoxModule
  ],
  providers: [ComboBoxService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
