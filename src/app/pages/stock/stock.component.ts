import { MatTableDataSource } from '@angular/material/table'
import { MatSort } from '@angular/material/sort';
import { AuthService } from './../../shared/services/auth.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements AfterViewInit, OnInit {

  public form = new FormGroup({
    id : new FormControl('', Validators.required)
  });

  displayedColumns: string[] = ['idneumaticos', 'cod_Articulo', 'marca', 'modelo', 'medida'];

  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  constructor(private authSvc: AuthService) {}
  
  ngOnInit(): void {
    this.init();
  }
  
  init(): void{
    this.authSvc.getAllUsers().subscribe((datos) => {
      this.dataSource.data = datos;      
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  
  onSearch(): void{
    const { id }  = this.form.value;
     this.authSvc.getUser(id).subscribe((dato) => {
      if(dato.message){
        window.alert("-- "+dato.message);
      }else{
        this.dataSource.data = dato;      
      }
    });
  }

  onReset(): void{
    this.form.reset();
    this.init();
  }

}
