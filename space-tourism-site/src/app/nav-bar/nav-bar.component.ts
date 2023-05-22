import { Component } from '@angular/core';
import { ITab } from "../models/tab.interface";
import { tabs } from "./nav-bar-tabs.model";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  tabs: ITab[] = tabs;
}
