/**
 * Created by Quentin Gangler on 20/12/2016.
 */
import {Component, AfterViewInit, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'usersArticlesTab',
  templateUrl: 'usersArticlesTab.html',
  styleUrls: ['usersArticlesTab.css'],
})

export class UsersArticlesTab implements OnInit{

  constructor() {
    console.log('UsersArticlesTab loaded');
  }

  ngOnInit(): void {
    console.log('UsersArticlesTab init');
  }
}
