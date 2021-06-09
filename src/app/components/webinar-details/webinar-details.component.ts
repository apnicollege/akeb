import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Webinar } from 'src/app/model/webinar.model';
import { WebinarService } from 'src/app/service/webinar.service';

@Component({
  selector: 'app-webinar-details',
  templateUrl: './webinar-details.component.html',
  styleUrls: ['./webinar-details.component.css']
})
export class WebinarDetailsComponent implements OnInit {

  webinarId: number;
  webinar: Webinar;

  constructor(private webinarService: WebinarService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.webinarId = this.actRoute.snapshot.params['wid'];
    this.webinarService.fetchWebinarById(this.webinarId).subscribe(data=>{
      this.webinar = data;
      console.log(this.webinar);
    });
  }

}
