import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';


@Component({
  templateUrl: 'segment.html'
})
export class SegmentPage {
  level: string = "primary";
  isAndroid: boolean = false;
  
  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}