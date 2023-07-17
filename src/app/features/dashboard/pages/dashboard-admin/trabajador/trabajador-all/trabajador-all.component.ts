import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from '../../shared/trabajador.service';

@Component({
  selector: 'app-trabajador-all',
  templateUrl: './trabajador-all.component.html',
  styleUrls: ['./trabajador-all.component.scss']
})
export class TrabajadorAllComponent implements OnInit{


  trabajadores:any = [];

  constructor(private apiTrabajador:TrabajadorService){}

  ngOnInit(): void {
      this.getAllTrabajadores();
  }

  getAllTrabajadores(){
    this.apiTrabajador.getAll().subscribe((res)=>{
      //console.log(res.trabajador)
      this.trabajadores = res.trabajador;
    })
  };

  createTrabajador(){

  }
}
