import { Component, Input } from '@angular/core';
import { ITab } from "../models/tab.interface";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  tabs: ITab[] = [
    {
      title: 'home',
      url: '/home',
      selected: true
    },
    {
      title: 'destination',
      url: '/destination',
      selected: true
    },
    {
      title: 'crew',
      url: '/crew',
      selected: true
    },
    {
      title: 'technology',
      url: '/technology',
      selected: true
    },
  ];
}
