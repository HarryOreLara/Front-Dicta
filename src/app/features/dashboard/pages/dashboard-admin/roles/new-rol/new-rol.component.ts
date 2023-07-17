import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RolService } from '../../shared/rol.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-rol',
  templateUrl: './new-rol.component.html',
  styleUrls: ['./new-rol.component.scss']
})
export class NewRolComponent implements OnInit{

  formRol:FormGroup = this.fb.group({
    numRol:['', [Validators.required, Validators.minLength(1), Validators.maxLength(3)]],
    nombreRol:['', [Validators.required, Validators.minLength(10)]]

  })

  constructor(private fb:FormBuilder, private apiRol:RolService){}

  ngOnInit(): void {
    



  }


  guardar(){

    //console.log(this.formRol.value)
    this.apiRol.create(this.formRol.value).subscribe((res)=>{
      if (res===true) {
        Swal.fire({
          title:'Exito',
          icon:'success',
          text:"Categoria Creada Correctamente"
        });
        this.formRol.reset();
      }else{
        Swal.fire({
          title: 'Error...',
          icon: 'error',
          text: 'Ups! Algo Paso'
        });
      }
    });
    }



  
}
