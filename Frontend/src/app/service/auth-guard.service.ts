import { Injectable } from '@angular/core';

import { Router, CanActivateChild, CanActivate } from '@angular/router';

import { GlobalStoreService } from './global-store.service';

import { hasAdminAccess } from '../utils/auth.utils';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private route: Router) { }
  canActivate(): boolean {
    if (localStorage.getItem("TOKEN") === null) return true;
    this.route.navigate(['/home']);
    return false;
  }
  canActivateChild(): boolean {
    if (localStorage.getItem("TOKEN") !== null) return true;
    this.route.navigate(['/auth/login']);
    return false;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {
  constructor(private route: Router, private globalStore: GlobalStoreService) { }
  canActivate(): boolean {
    const { userType } = this.globalStore.getGlobalStore();
    if (hasAdminAccess(userType)) return true;
    this.route.navigate(['/home']);
    return false;
  }
}
