import { Component, OnInit } from '@angular/core';
import jsonData from '../../assets/json/data.json';
import { ICrew } from "./crew.model";
import { BackgroundService, page } from "../background.service";

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements OnInit{

  data: ICrew[] = jsonData.crew;
  crewIndex: number = 0;

  constructor(private backgroundService: BackgroundService) { }

  ngOnInit() {
    this.backgroundService.setBackground(page.crew);
  }

  get crewMember(): ICrew {
    return this.data
      .find((cm: ICrew, index: number) => index === this.crewIndex)
      || this.data[0];
  }

  get imageAltText(): string {
    return '';
  }
}
