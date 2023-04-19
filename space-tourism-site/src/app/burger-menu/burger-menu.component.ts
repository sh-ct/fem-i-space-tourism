import { Component, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ITab } from "../models/tab.interface";

interface IIcon {
  url: string;
  alt: string;
}

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent {
  @Input() tabs: ITab[] = [];
  showMenu: boolean = false;

  burgerIcon: IIcon = {
    url: '../../assets/icons/burger.svg',
    alt: 'burger menu, thee white horizontal lines stacked vertically'
  };
  crossIcon: IIcon = {
    url: '../../assets/icons/cross.svg',
    alt: 'white cross on transparent background'
  }




  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
