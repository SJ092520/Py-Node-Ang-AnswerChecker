import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, FormControl, Validators} from '@angular/forms';
import { ApiClientService } from 'src/app/service/api-client.service';
import { GlobalStoreService } from 'src/app/service/global-store.service';
import {CONSTANTS} from '../../../keys/constants'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private service: ApiClientService,
    private router: Router,
    private globalStore: GlobalStoreService,
    private fb: FormBuilder
  ) { }
  
  errorMessage:any;
  loginForm = new FormGroup({
    userId: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  });
  ngOnInit(): void {
  }

  authenticateUser() {
    this.service.loginUser(this.loginForm.value).subscribe(res=>{
      console.log(res)
      localStorage.setItem("TOKEN",res.token);
      this.globalStore.setGlobalStore({id:res.userData.id,name:res.userData.name,role:res.userData.role,deptId:res.userData.deptId});

      if(CONSTANTS.ROLE_WITH_ADMIN_ACCESS.includes(res.userData.role)){
        this.router.navigate(['/management']);
      }
      else{
        
        this.router.navigate(['/student']);
      }
    });
  }

}
