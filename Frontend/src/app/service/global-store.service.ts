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
      role: localStorage.getItem('ROLE'),
      deptId: localStorage.getItem('DEPTID'),
    }
  }
  setGlobalStore(globalData: any) {
    localStorage.setItem('ID', globalData.userId);
    localStorage.setItem('NAME', globalData.userName);
    localStorage.setItem('ROLE', globalData.role);
    localStorage.setItem('DEPTID', globalData.deptId);
  }
  clearGlobalStore() {
    localStorage.clear();
  }
}
