import { Component, OnInit } from '@angular/core';
import { Webinar, WebinarData } from 'src/app/model/webinar.model';
import { WebinarService} from '../../service/webinar.service';
@Component({
  selector: 'app-webinars',
  templateUrl: './webinars.component.html',
  styleUrls: ['./webinars.component.css']
})
export class WebinarsComponent implements OnInit {

  recentWebinars : Webinar[] = [];
  upcomingWebinars: Webinar[] = [];
  webinarDate : WebinarData;
  constructor(private webinarService: WebinarService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.webinarService.fetchWebinars().subscribe(data=>{
      this.webinarDate = data;
      this.upcomingWebinars = this.webinarDate.upcomingWebinars;
      this.recentWebinars = this.webinarDate.recentlyConcludedWebinars;
      console.log(this.webinarDate);
    });
  }

}
