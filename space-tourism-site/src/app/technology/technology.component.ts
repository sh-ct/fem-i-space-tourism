import { Component, OnInit } from '@angular/core';
import { BackgroundService, page } from "../background.service";
import jsonData from '../../assets/json/data.json';
import { ITechnology } from "./technology.model";

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  data: ITechnology[] = jsonData.technology;
  techIndex: number = 0;

  constructor(private backgroundService: BackgroundService) { }

  ngOnInit(): void {
    this.backgroundService.setBackground(page.technology);
  }

  get technology(): ITechnology {
    return this.data.find((tech: ITechnology, index: number) =>
      index === this.techIndex)
      || this.data[0];
  }

  get imageAltText(): string {
    return '';
  }

}
