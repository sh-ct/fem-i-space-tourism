import { Injectable } from '@angular/core';

export enum page {
  home = 'home',
  destination = 'destination',
  crew = 'crew',
  technology = 'technology'
}

export type BackgroundClass = page;


@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  constructor() { }

  setBackground(page: BackgroundClass) {
    document.body.className = page;
  }
}
