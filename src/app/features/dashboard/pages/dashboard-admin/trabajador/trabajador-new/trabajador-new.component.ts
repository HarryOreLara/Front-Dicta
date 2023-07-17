import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { TrabajadorService } from '../../shared/trabajador.service';
import Swal from 'sweetalert2';

function fechaNacimientoValidator(control: FormControl) {
  const fechaNacimiento = new Date(control.value);
  const fechaActual = new Date();
  const edadMaxima = new Date(fechaActual.getFullYear() - 100, fechaActual.getMonth(), fechaActual.getDate());

  if (fechaNacimiento > fechaActual) {
    return { fechaInvalida: true, mensaje: 'La fecha de nacimiento no puede ser mayor a la fecha actual' };
  }

  if (fechaNacimiento < edadMaxima) {
    return { fechaInvalida: true, mensaje: 'La edad máxima permitida es 100 años' };
  }

  return null;
}

@Component({
  selector: 'app-trabajador-new',
  templateUrl: './trabajador-new.component.html',
  styleUrls: ['./trabajador-new.component.scss']
})
export class TrabajadorNewComponent implements OnInit{

  opciones: string[] = ['Opción 1', 'Opción 2', 'Opción 3'];

  formTrabajador:FormGroup =  this.fb.group({
    nombre:['', [Validators.required, Validators.minLength(3)]],
    apellidos:['', [Validators.required, Validators.minLength(3)]],
    email:['', [Validators.required, Validators.email, Validators.minLength(12)]],
    edad:['', [Validators.required, Validators.min(18), Validators.max(50)]],
    genero:['',[ Validators.required]],
    dni:['', [Validators.required, Validators.minLength(8), Validators.maxLength(13)]],
    fechaNacimiento:['', [Validators.required, fechaNacimientoValidator]],
    profesion:['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]]
  })

  genero = [
    { name: 'Masculino', value: 'masculino'},
    { name: 'Femenino', value: 'femenino' },
    { name: 'Otro', value: 'otro' }
  ];

  selectedCity: string ="";

  constructor(private fb:FormBuilder, private apitrabajador:TrabajadorService){}


  ngOnInit(): void {
      
  }

  guardar(){
    this.apitrabajador.create(this.formTrabajador.value).subscribe((res)=>{
      if (res==true) {
        Swal.fire({
          title:'Exito',
          icon: 'success',
          text:'Trabajador registrado correctamente'
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


  onFechaNacimientoSelect(event: any) {
    if (event && event.originalEvent && event.originalEvent.target) {
      const fechaSeleccionada = event.originalEvent.target.value;
      this.formTrabajador.get('fechaNacimiento')?.setValue(fechaSeleccionada);
    }
  }

  
}
