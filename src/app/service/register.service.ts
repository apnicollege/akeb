import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppConstants } from '../app.constant';
import {ICaptchaResponse, Questionaire, User} from '../model/user.model';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  user : User;
  userFetchApi: string;
  userPostApi: string;
  questionaireApi : string;
  public user$ = new BehaviorSubject<User>({});

  constructor(private http : HttpClient) {
    this.userFetchApi = AppConstants.getbaseURL() + '/user/';
    this.userPostApi = AppConstants.getbaseURL() + '/user/register/webinar';
    this.questionaireApi = AppConstants.getbaseURL() + '/user/webinar/questions';
  }

  fetchDetails(email : string) : User{
    return null;
  }

  verifyCaptcha(formData : FormData) : Observable<ICaptchaResponse>{
    return this.http.post<ICaptchaResponse>('https://www.google.com/recaptcha/api/siteverify', formData);
  }

  checkIfEmailExists(email: string) : Observable<User>{
     //call api and verify
    return  this.http.get<User>(this.userFetchApi + email);
    //  let res : IUser =  {
    //    "id" : 1,
    //    "name" : "imt",
    //    "email" : "a@b.com",
    //    "qualification" : "BE"
    //  };
    //  return res;
  }

  postUser(user: User, webinarId: string) : Observable<User>{
    return this.http.post<User>(this.userPostApi + '/' + webinarId ,user);
  }


  postQuestionaire(questionaire: Questionaire) : Observable<any>{
    return this.http.post<any>(this.questionaireApi + '/' + questionaire.webinarId + '/'
    + questionaire.userId,
    questionaire);

  }


}
