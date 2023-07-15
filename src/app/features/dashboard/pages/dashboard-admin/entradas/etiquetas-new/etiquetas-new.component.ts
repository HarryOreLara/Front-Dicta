import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiEtiquetaService } from '../../../dashboard-employes/shared/entrada/etiqueta/api-etiqueta.service';

@Component({
  selector: 'app-etiquetas-new',
  templateUrl: './etiquetas-new.component.html',
  styleUrls: ['./etiquetas-new.component.scss']
})
export class EtiquetasNewComponent implements OnInit {
  cols = [
    { field: 'nombre', header: 'Nombre' },
    { field: 'slug', header: 'Slug' },
    { field: 'descripcion', header: 'Descripcion' }
  ];

  etiquetas = []

  formEtiqueta:FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    slug: ['', [Validators.required, Validators.minLength(5)]],
    descripcion: ['', [Validators.required]],
  });

  constructor(private fb:FormBuilder, private apiEtiqueta: ApiEtiquetaService){}

  ngOnInit(): void {
    this.read();
  }

  guardar(){


    this.apiEtiqueta.create(this.formEtiqueta.value).subscribe((res)=>{
      if (res===true) {
        Swal.fire({
          title:'Exito',
          icon:'success',
          text:"Etiqueda Creada Correctamente"
        });
        this.formEtiqueta.reset();
        this.read();
      }else{
        Swal.fire({
          title: 'Error...',
          icon: 'error',
          text: 'Ups! Algo Paso'
        });
      }
    });
  }


  
  read(){
    this.apiEtiqueta.read().subscribe((res)=>{
      this.etiquetas = res.etiqueta;
    });
  }

}
