import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiPostService } from '../../../dashboard-employes/shared/entrada/post/api-post.service';
import { ApiCategoriaService } from '../../../dashboard-employes/shared/entrada/categoria/api-categoria.service';
import { Categoria } from 'src/app/shared/models/categoria.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-poust-update',
  templateUrl: './poust-update.component.html',
  styleUrls: ['./poust-update.component.scss']
})
export class PoustUpdateComponent implements OnInit{
  opciones: any[] = ['hola', 'mundo'];

  valoresSeleccionados: any[] = [];

  uploadedFiles: File[] = [];

  formPoust: FormGroup = this.fb.group({
    titulo: ['', [Validators.required, Validators.minLength(3)]],
    fraseClave: ['', [Validators.required, Validators.minLength(3)]],
    slug: ['', [Validators.required, Validators.minLength(5)]],
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
    console.log(this.formPoust.value);
    this.apiPoust.createPoust(this.formPoust.value).subscribe((res) => {
      if (res === true) {
        Swal.fire({
          title: 'Exito',
          icon: 'success',
          text: 'Post creado Correctamente',
        });
        this.formPoust.reset();
      } else {
      }
      Swal.fire({
        title: 'Error...',
        icon: 'error',
        text: 'Ups! Algo Paso',
      });
    });
  }

  onFileChange(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.uploadedFiles = Array.from(files);
    }
  }

  handleUpload() {
    // Aquí puedes implementar la lógica para enviar las imágenes a la base de datos
    if (this.uploadedFiles.length > 0) {
      // Realiza la llamada al servicio o API para enviar las imágenes a la base de datos
      console.log('Imágenes enviadas:', this.uploadedFiles);
    }
  }
}
