import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContratoService } from '../../shared/contrato.service';
import Swal from 'sweetalert2';
import { TrabajadorService } from '../../shared/trabajador.service';
import { Trabajador } from 'src/app/shared/models/trabajador.model';

@Component({
  selector: 'app-contrato-new',
  templateUrl: './contrato-new.component.html',
  styleUrls: ['./contrato-new.component.scss'],
})
export class ContratoNewComponent implements OnInit {
  formContrato: FormGroup = this.fb.group({
    fechaInicio: ['', [Validators.required]],
    fechaFin: ['', [Validators.required]],
    sueldo: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(4)]],
    idTrabajador:['']
  });

  //trabajador: any[] = ['hola','mundo'];
  trabajador:any ={}
  valoresSeleccionados: any[] = [];


  constructor(
    private fb: FormBuilder,
    private apiContrato: ContratoService,
    private apiTrabajador: TrabajadorService
  ) {}

  ngOnInit(): void {

    this.apiTrabajador.getAll().subscribe(res=>{
      this.trabajador = res.trabajador.map((trabajador:Trabajador)=>({
        label: trabajador.dni,
        value: trabajador._id
      }))
    });
  }

  obtenerId(){
    let id = this.formContrato.value.idTrabajador[0];
    console.log(id)
    return id;
  }

  guardar() {

    let id = this.formContrato.value.idTrabajador[0];
    this.formContrato.patchValue({
      idTrabajador: id
    })
    this.apiContrato.create(this.formContrato.value).subscribe((res) => {
      if (res == true) {
        Swal.fire({
          title: 'Exito',
          icon: 'success',
          text: 'Contrato registrado correctamente',
        });
      } else {
        Swal.fire({
          title: 'Error...',
          icon: 'error',
          text: 'Ups! Algo Paso',
        });
      }
    });

  }



}
