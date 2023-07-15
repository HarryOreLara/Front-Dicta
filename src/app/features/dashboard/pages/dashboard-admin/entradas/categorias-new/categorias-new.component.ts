import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiCategoriaService } from '../../../dashboard-employes/shared/entrada/categoria/api-categoria.service';
@Component({
  selector: 'app-categorias-new',
  templateUrl: './categorias-new.component.html',
  styleUrls: ['./categorias-new.component.scss']
})
export class CategoriasNewComponent implements OnInit {

  cols = [
    { field: 'nombre', header: 'Nombre' },
    { field: 'slug', header: 'Slug' },
    { field: 'descripcion', header: 'Descripcion' },
  ];

  products = [];

  formCategoria: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    slug: ['', [Validators.required, Validators.minLength(5)]],
    descripcion: ['', [Validators.required]],
  });

  user:any;

  constructor( private apiCategoria: ApiCategoriaService,
    private fb: FormBuilder){

  }

  ngOnInit(): void {
    this.user = this.apiCategoria.user;
    this.read();
  }

  guardar() {

    this.apiCategoria.create(this.formCategoria.value).subscribe((res)=>{
      if (res===true) {
        Swal.fire({
          title:'Exito',
          icon:'success',
          text:"Categoria Creada Correctamente"
        });
        this.formCategoria.reset();
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
    this.apiCategoria.read().subscribe((res) => {
      this.products = res.categorias;
    });
  }

}
