import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalStoreService {

  constructor() { }
  getGlobalStore() {
    return {
      userId: localStorage.getItem('ID'),
      userName: localStorage.getItem('USERNAME'),
      role: localStorage.getItem('ROLE'),
      deptId: localStorage.getItem('DEPTID'),
    }
  }
  setGlobalStore(globalData: any) {
    localStorage.setItem('ID', globalData.id);
    localStorage.setItem('NAME', globalData.name);
    localStorage.setItem('ROLE', globalData.role);
    localStorage.setItem('DEPTID', globalData.deptId);
  }
  clearGlobalStore() {
    localStorage.clear();
  }
}
