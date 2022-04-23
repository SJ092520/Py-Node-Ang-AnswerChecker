import { Component, OnInit } from '@angular/core';
import { GlobalStoreService } from 'src/app/service/global-store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private globalStore: GlobalStoreService) { }
  localStorage: any;
  ngOnInit(): void {
    this.localStorage = localStorage;
  }

  logout() {
    this.globalStore.clearGlobalStore();
  }

}
