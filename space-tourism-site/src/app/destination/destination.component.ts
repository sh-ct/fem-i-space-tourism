import { Component } from '@angular/core';
import jsonData from '../../assets/json/data.json';
import { IDestination } from "./destination.model";

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent {
  data: IDestination[] = jsonData.destinations;
  index: number = 0;

  stepIndex() {
    if (this.index + 1 > this.data.length) {
      this.index = 0;
    } else {
      ++this.index;
    }
  }

  get destination() {
    return this.data[this.index];
  }

}
