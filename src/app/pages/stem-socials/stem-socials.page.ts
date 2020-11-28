import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stem-socials',
  templateUrl: './stem-socials.page.html',
  styleUrls: ['./stem-socials.page.scss'],
})
export class StemSocialsPage implements OnInit {
  ishidden = false;
  pastishidden = true;
  events: any[] = [
    {
      eventTitle: "First Event",
      eventTime: "6:25 PST",
      eventLocation: "Zoom",
      eventDescription: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus velit adipiscing 
      duis suspendisse sit purus. Faucibus sodales libero integer eget mauris nibh 
      odio ullamcorper. Ac ultricies diam urna, aliquet integer. Odio feugiat quis. 
      In ac elit posuere diam, purus bibendum sed. Mattis vitae feugiat sed sit 
      cursus urna. Rhoncus vestibulum vel urna, gravida. Blandit nisl volutpat.`,
      eventMonth: "July",
      eventDate: 24,
      eventDay: "Friday",
    },
    {
      eventTitle: "Second Event",
      eventTime: "7:25 PST",
      eventLocation: "Zoom",
      eventDescription: `
      Lorem ipsum dolor sit , consectetur adipiscing elit. Purus velit adipiscing 
      duis suspendisse sit purus. Faucibus sodales libero integer  mauris nibh 
      odio ullamcorper. Ac ultricies diam urna, aliquet integer. Odio  quis. 
      In ac elit posuere , purus bibendum . Mattis vitae feugiat sed sit 
      cursus urna. Rhoncus vestibulum vel urna, gravida. Blandit nisl volutpat.`,
      eventMonth: "July",
      eventDate: 24,
      eventDay: "Friday",
    },
  ]

  pastEvents: any[] = [
    {
      eventTitle: "First Past Event",
      eventTime: "6:25 PST",
      eventLocation: "Zoom",
      eventDescription: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus velit adipiscing 
      duis suspendisse sit purus. Faucibus sodales libero integer eget mauris nibh 
      odio ullamcorper. Ac ultricies diam urna, aliquet integer. Odio feugiat quis. 
      In ac elit posuere diam, purus bibendum sed. Mattis vitae feugiat sed sit 
      cursus urna. Rhoncus vestibulum vel urna, gravida. Blandit nisl volutpat.`,
      eventMonth: "July",
      eventDate: 24,
      eventDay: "Friday",
    },
    {
      eventTitle: "Second Past Event",
      eventTime: "7:25 PST",
      eventLocation: "Zoom",
      eventDescription: `
      Lorem ipsum dolor sit , consectetur adipiscing elit. Purus velit adipiscing 
      duis suspendisse sit purus. Faucibus sodales libero integer  mauris nibh 
      odio ullamcorper. Ac ultricies diam urna, aliquet integer. Odio  quis. 
      In ac elit posuere , purus bibendum . Mattis vitae feugiat sed sit 
      cursus urna. Rhoncus vestibulum vel urna, gravida. Blandit nisl volutpat.`,
      eventMonth: "July",
      eventDate: 24,
      eventDay: "Friday",
    },
  ];
  
  segmentChanged() {
    if(this.ishidden == false){
      this.ishidden = true;
      this.pastishidden = false;
    }else{
      this.ishidden = false;
      this.pastishidden = true;
    }
  }

  constructor() { }


  ngOnInit() {
  }

}
