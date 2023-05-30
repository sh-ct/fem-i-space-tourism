import { Component, OnInit } from '@angular/core';
import jsonData from '../../assets/json/data.json';
import { IDestination } from "./destination.model";

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {
  data: IDestination[] = jsonData.destinations;
  index: number = 0;
  selectedDestination: string = this.data[0].name;

  ngOnInit() {
    document.body.className = 'destination';
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
