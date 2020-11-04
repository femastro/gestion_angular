import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public appName = "GESTION";

  public isLogged = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onLogout(){

  }

}
