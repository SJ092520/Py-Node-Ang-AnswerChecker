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
    if (localStorage.getItem("TOKEN") == null) return true;
    if(hasAdminAccess(localStorage.getItem("ROLE"))){
      this.route.navigate(['/management']);
    }
    else{
      this.route.navigate(['/student']);
    }
    return false;
  }
  canActivateChild(): boolean {
    if (localStorage.getItem("TOKEN") != null) return true;
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
    const { role } = this.globalStore.getGlobalStore();
    if (hasAdminAccess(role)) return true;
    this.route.navigate(['/home']);
    return false;
  }
}
