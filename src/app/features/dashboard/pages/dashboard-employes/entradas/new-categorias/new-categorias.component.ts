import { Component, OnInit } from '@angular/core';
import { ApiCategoriaService } from '../../shared/entrada/categoria/api-categoria.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-categorias',
  templateUrl: './new-categorias.component.html',
  styleUrls: ['./new-categorias.component.scss'],
})
export class NewCategoriasComponent implements OnInit {


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

  constructor(
    private apiCategoria: ApiCategoriaService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.user = this.apiCategoria.user;
    this.read();
  }

  guardar() {
    this.apiCategoria.create(this.formCategoria.value).subscribe((res)=>{
      this.formCategoria.reset();
      this.read();
    });
  }

  read(){
    this.apiCategoria.read().subscribe((res) => {
      this.products = res.categorias;
    });
  }





}
