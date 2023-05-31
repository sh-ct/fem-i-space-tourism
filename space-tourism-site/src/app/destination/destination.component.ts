import { Component, OnInit } from '@angular/core';
import jsonData from '../../assets/json/data.json';
import { IDestination } from "./destination.model";
import { BackgroundService, page } from "../background.service";

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {
  data: IDestination[] = jsonData.destinations;
  selectedDestination: string = this.data[0].name;

  constructor(private backgroundService: BackgroundService) { }

  ngOnInit() {
    this.backgroundService.setBackground(page.destination);
  }

  get destination() {
    return this.data
      .find(planet =>
        planet.name === this.selectedDestination
      ) || this.data[0];
  }

  get imageAltText() {
    return ''
  }
}
