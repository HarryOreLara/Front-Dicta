import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {

  cities:any[] = []
  uploadedFiles: File[] = [];
  formPoust:FormGroup = this.fb.group({

  });

  constructor(private fb:FormBuilder){}

  guardar(){

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
