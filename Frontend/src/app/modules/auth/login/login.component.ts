import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, FormControl, Validators} from '@angular/forms';
import { ApiClientService } from 'src/app/service/api-client.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private service: ApiClientService,
    private router: Router,
    // private globalStore: GlobalStoreService,
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
      console.log(res);
    });
  }

}
