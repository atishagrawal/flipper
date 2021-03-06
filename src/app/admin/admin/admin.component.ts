import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUser } from '../../core/guards/current-user';
import { PouchDBService } from '@enexus/flipper-components';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {

  userToggledMenu: any;

   constructor(
    private database: PouchDBService,
    public currentUser: CurrentUser) {}


  ngOnDestroy() {}

   ngOnInit() {



  }
  isMenuToggled(event) {
    this.userToggledMenu = event;
  }


  displaySwitchedBranch(event) {

  }
  didUserLoggedOut(event) {
    window.localStorage.setItem('channel',this.database.uid());

    return window.location.href='/login';
  }



}
