import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalStoreService {

  constructor() { }
  getGlobalStore() {
    return {
      userId: localStorage.getItem('USERID'),
      userName: localStorage.getItem('USERNAME'),
      userType: localStorage.getItem('USERTYPE')
    }
  }
  setGlobalStore(globalData: any) {
    localStorage.setItem('USERID', globalData.userId);
    localStorage.setItem('USERNAME', globalData.userName);
    localStorage.setItem('USERTYPE', globalData.userType);
  }
  clearGlobalStore() {
    localStorage.clear();
  }
}
