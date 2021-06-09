export interface Webinar{
  id : number;
  title : string;
  description : string;
  image? : string;
  date: string;
  day: string;
  time: string;
  speakers: string;
  category?: WebinarCategory;
}

export interface WebinarCategory{
  id: number;
  title: string;
}


export interface WebinarData{
  upcomingWebinars : Webinar[];
  recentlyConcludedWebinars: Webinar[];
}
