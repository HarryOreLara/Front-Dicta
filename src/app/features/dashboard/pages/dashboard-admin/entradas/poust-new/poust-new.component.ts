import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiCategoriaService } from '../../../dashboard-employes/shared/entrada/categoria/api-categoria.service';
import { ApiPostService } from '../../../dashboard-employes/shared/entrada/post/api-post.service';
import { Categoria } from 'src/app/shared/models/categoria.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-poust-new',
  templateUrl: './poust-new.component.html',
  styleUrls: ['./poust-new.component.scss'],
})
export class PoustNewComponent implements OnInit {
  opciones: any[] = ['hola', 'mundo'];

  valoresSeleccionados: any[] = [];

  uploadedFiles: File[] = [];

  formPoust: FormGroup = this.fb.group({
    titulo: ['', [Validators.required]],
    fraseClave: ['', [Validators.required]],
    slug: ['', [Validators.required]],
    metadescripcion: ['', [Validators.required]],
    parrafo1: ['', [Validators.required]],
    parrafo2: ['', [Validators.required]],
    parrafo3: ['', [Validators.required]],
    parrafo4: ['', [Validators.required]],
    categoria: ['', [Validators.required]],
    archivo1: [''],
    archivo2: [''],
    archivo3: [''],
    archivo4: [''],
  });

  constructor(
    private fb: FormBuilder,
    private apiCategoria: ApiCategoriaService,
    private apiPoust: ApiPostService
  ) {}

  ngOnInit(): void {
    this.apiCategoria.read().subscribe((res) => {
      this.opciones = res.categorias.map((categoria: Categoria) => ({
        label: categoria.nombre,
        value: categoria.nombre,
      }));
    });
  }

  guardar() {
    let id = this.formPoust.value.categoria[0];
    this.formPoust.patchValue({
      categoria: id
    })
    this.apiPoust.createPoust(this.formPoust.value).subscribe((res) => {
      if (res==true) {
        Swal.fire({
          title: 'Exito',
          icon: 'success',
          text: 'Post creado Correctamente',
        });
        this.formPoust.reset();
      }else{
        Swal.fire({
          title: 'Error...',
          icon: 'error',
          text: 'Ups! Algo Paso',
        });
      }
    });
  }


}
