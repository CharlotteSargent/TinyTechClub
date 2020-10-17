import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  headerClicked = false;

  constructor() { }

  ngOnInit() {}

  async headerClickedAction() {
    this.headerClicked = true;
    await new Promise(resolve => setTimeout(resolve, 100));
    this.headerClicked = false;
  }

}