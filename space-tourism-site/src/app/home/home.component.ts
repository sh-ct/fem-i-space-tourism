import { Component, OnInit } from '@angular/core';
import { BackgroundService, page } from "../background.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private backgroundService: BackgroundService) { }

  ngOnInit() {
    this.backgroundService.setBackground(page.home);
  }
}
