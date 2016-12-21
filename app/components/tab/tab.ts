/**
 * Created by Quentin Gangler on 20/12/2016.
 */
import {Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tab',
  templateUrl: 'tab.html',
  styleUrls: ['tab.css'],
})

export class Tab {
  @Input('tabTitle') title: string;
  @Input() active = false;

  constructor() {
    console.log("Tab built");
  }
}
