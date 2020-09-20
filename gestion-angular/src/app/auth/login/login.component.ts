import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '@shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public usuario : any;

  constructor(private fb: FormBuilder, private authSvc: AuthService) { }

  ngOnInit(): void {
  }

  public formLogin = this.fb.group({
    userName: [''],
    password: [''],
  })

  public onLogin(){
    const user = this.formLogin.value;
    this.authSvc.login(user).subscribe(res =>{
      this.usuario = res
    });
    console.log(this.usuario);
  }

}
