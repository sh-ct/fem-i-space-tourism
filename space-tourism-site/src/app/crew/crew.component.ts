import { Component, OnInit } from '@angular/core';
import data from '../../assets/json/data.json';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements OnInit{

  constructor() {}

  ngOnInit() {
    console.log(data);
  }

}
