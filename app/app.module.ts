import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }     from './app.component';
import { Tabs }             from "./components/tabs/tabs";
import { HomeTab }          from "./components/homeTab/homeTab";
import { MainArticlesTab }  from "./components/mainArticlesTab/mainArticlesTab";
import { UsersArticlesTab } from "./components/usersArticlesTab/usersArticlesTab";
import { Tab }              from "./components/tab/tab";
import { NuTranslate }      from "./providers/translate/nuTranslate";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, Tabs, Tab, HomeTab, MainArticlesTab, UsersArticlesTab ],
  providers:    [ NuTranslate ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
