export interface IUser{
  id? : number;
  email? : string;
  name?: string;
  qualification?: string;
}


export interface ICaptchaResponse{
    success?: boolean,
    challenge_ts?: string
    hostname?: string
}


export interface User{
  id?: number;
  email? : string;
  fName?: string;
  mName?: string;
  lName?: string;
  qualification?: string;
  dob?: string;
  contact?: string;
  regionalCouncil?: string;
  localCouncil?: string;
  university?: string;
  college?: string;
}


export interface Questionaire{
  q1?: string;
  q2?: string;
  q3?: string;
  q4?: string;
  q5?: string;
  q6?: string;
  q7?: string;
  q8?: string;
  a1?: string;
  a2?: string;
  a3?: string;
  a4?: string;
  a5?: string;
  a6?: string;
  a7?: string;
  a8?: string;
  userId?: number;
  webinarId?: number;
}
