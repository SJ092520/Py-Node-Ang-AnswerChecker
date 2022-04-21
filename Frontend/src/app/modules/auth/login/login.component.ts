import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    // private service: ApiClientService,
    private router: Router,
    // private globalStore: GlobalStoreService,
    private fb: FormBuilder
  ) { }
  
  loginForm = new FormGroup({
    userId: new FormControl('',[Validators.required]),
    userPassword: new FormControl('',[Validators.required])
  });
  ngOnInit(): void {
  }

  authenticateUser() {}

}
