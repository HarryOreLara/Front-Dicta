import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { ApiPerfilService } from '../../shared/perfil/api-perfil.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  //numero: ['', [Validators.required, Validators.min(11), Validators.max(59)]]

  opciones: string[] = ['Opción 1', 'Opción 2', 'Opción 3'];

  formPerfil: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellidos: ['',[Validators.required, Validators.minLength(3)]],
    genero:['',[Validators.required]],
    edad: ['', [Validators.required, Validators.min(10), Validators.max(60)]],
    telefono: ['',[Validators.required, Validators.max(14), Validators.min(9)]],
    _id:[this.getLocalSotarge().id],
    tipo:[this.getLocalSotarge().rol],
    email:[this.getEmail()]
  });
  
  genero = [
    { name: 'Masculino', value: 'masculino'},
    { name: 'Femenino', value: 'femenino' },
    { name: 'Otro', value: 'otro' }
  ];

  selectedCity: string ="";

  constructor(private fb: FormBuilder, private apiPerfil:ApiPerfilService) {}

  ngOnInit(): void {
  }

  guardar() {
    this.apiPerfil.create(this.formPerfil.value).subscribe((res)=>{
      if (res===true) {
        Swal.fire({
          title:'Exito',
          icon:'success',
          text:'Perfil Registrado Correctamente'
        });
      }else{
        Swal.fire({
          title: 'Error...',
          icon: 'error',
          text: 'Ups! Algo Paso'
        });
      }
    })
  }

  getLocalSotarge(){
    let id = JSON.parse(localStorage.getItem('user')!);
    //console.log(id)
    return id;
  }

  getEmail(){
    let email = JSON.parse(localStorage.getItem('email')!);
    return email;
  }
}
