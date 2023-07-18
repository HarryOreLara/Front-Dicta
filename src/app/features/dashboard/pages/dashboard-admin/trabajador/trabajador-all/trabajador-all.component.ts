import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from '../../shared/trabajador.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trabajador-all',
  templateUrl: './trabajador-all.component.html',
  styleUrls: ['./trabajador-all.component.scss']
})
export class TrabajadorAllComponent implements OnInit{


  trabajadores:any = [];

  constructor(private apiTrabajador:TrabajadorService, private router:Router){}

  ngOnInit(): void {
      this.getAllTrabajadores();
  }

  getAllTrabajadores(){
    this.apiTrabajador.getAll().subscribe((res)=>{
      console.log(res.trabajador)
      this.trabajadores = res.trabajador;
    })
  };

  eliminarTrabajador(id:string){
    this.apiTrabajador.delete(id).subscribe((res)=>{
      if (res==true) {
        Swal.fire({
          title:'Exito',
          icon: 'success',
          text:'Trabajador eliminado correctamente'
        });
        this.getAllTrabajadores();
      }else{
        Swal.fire({
          title: 'Error...',
          icon: 'error',
          text: res
        });
      }
    })
  }

  navegarUpdate(id:string){
    this.router.navigate(['/dashboardAdmin/trabajador-update', id])
  }
}
