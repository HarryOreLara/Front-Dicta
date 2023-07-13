import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiEtiquetaService } from '../../shared/entrada/etiqueta/api-etiqueta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-etiquetas',
  templateUrl: './new-etiquetas.component.html',
  styleUrls: ['./new-etiquetas.component.scss']
})
export class NewEtiquetasComponent implements OnInit{

  // [formGroup]="formCategoria" (ngSubmit)="guardar()"

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

    // console.log(this.formEtiqueta.value);
    // this.apiEtiqueta.create(this.formEtiqueta.value).subscribe((res)=>{
    //   this.formEtiqueta.reset();
    //   this.read();
    // });

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
