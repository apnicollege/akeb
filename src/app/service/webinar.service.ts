import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants} from 'src/app/app.constant';
import {Webinar, WebinarData} from '../model/webinar.model';
@Injectable({
  providedIn: 'root'
})
export class WebinarService {

  webinarApi: string;
  webinarSingleApi: string;

  constructor(private http: HttpClient) {
    this.webinarApi = AppConstants.getbaseURL() + '/webinars';
    this.webinarSingleApi = AppConstants.getbaseURL() + '/webinar/';
  }

  public fetchWebinars() : Observable<WebinarData>{

    return  this.http.get<WebinarData>(this.webinarApi);
  }

  fetchWebinarById(webinarId: number) : Observable<Webinar> {
    return  this.http.get<Webinar>(this.webinarSingleApi + webinarId);
  }

}
