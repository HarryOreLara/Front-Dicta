import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from '../../shared/trabajador.service';

@Component({
  selector: 'app-trabajador-all',
  templateUrl: './trabajador-all.component.html',
  styleUrls: ['./trabajador-all.component.scss']
})
export class TrabajadorAllComponent implements OnInit{
  cols = [
    { field: 'nombre', header: 'Nombre' },
    { field: 'edad', header: 'Edad' },
    { field: 'email', header: 'Email' },
    { field: 'profesion', header: 'Profesion' },
    { field: 'fechaNacimiento', header: 'Fecha de Nacimiento' }
  ];

  trabajadores = [];

  constructor(private apiTrabajador:TrabajadorService){}

  ngOnInit(): void {
      this.getAllTrabajadores();
  }

  getAllTrabajadores(){
    this.apiTrabajador.getAll().subscribe((res)=>{
      console.log(res.trabajador)
      console.log(res)
      this.trabajadores = res.trabajador;
    })
  };

  createTrabajador(){

  }
}
