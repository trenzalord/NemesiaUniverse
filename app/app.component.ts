import { Component } from '@angular/core';
import {NuTranslate} from "./providers/translate/nuTranslate";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent  {

  public name: String = 'Angular';

  constructor(public nuTranslate: NuTranslate) {

  }

}
