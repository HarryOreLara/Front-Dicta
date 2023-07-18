import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from '../../shared/trabajador.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';

function fechaNacimientoValidator(control: FormControl) {
  const fechaNacimiento = new Date(control.value);
  const fechaActual = new Date();
  const edadMaxima = new Date(
    fechaActual.getFullYear() - 100,
    fechaActual.getMonth(),
    fechaActual.getDate()
  );

  if (fechaNacimiento > fechaActual) {
    return {
      fechaInvalida: true,
      mensaje: 'La fecha de nacimiento no puede ser mayor a la fecha actual',
    };
  }

  if (fechaNacimiento < edadMaxima) {
    return {
      fechaInvalida: true,
      mensaje: 'La edad máxima permitida es 100 años',
    };
  }

  return null;
}

@Component({
  selector: 'app-trabajador-update',
  templateUrl: './trabajador-update.component.html',
  styleUrls: ['./trabajador-update.component.scss'],
})
export class TrabajadorUpdateComponent implements OnInit {
  dtTrabajador: any = {};

  formTrabajador: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellidos: ['', [Validators.required, Validators.minLength(3)]],
    email: [
      '',
      [Validators.required, Validators.email, Validators.minLength(12)],
    ],
    edad: ['', [Validators.required, Validators.min(18), Validators.max(50)]],
    genero: ['', [Validators.required]],
    dni: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(13)],
    ],
    fechaNacimiento: ['', [Validators.required, fechaNacimientoValidator]],
    profesion: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(25)],
    ],
  });

  genero = [
    { name: 'Masculino', value: 'masculino' },
    { name: 'Femenino', value: 'femenino' },
    { name: 'Otro', value: 'otro' },
  ];

  selectedCity: string = '';

  idActualizar: string = '';

  constructor(
    private fb: FormBuilder,
    private apiTrabajador: TrabajadorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      console.log(params);
      let idTrabajador = params.get('id');
      this.idActualizar = params.get('id')!;

      this.apiTrabajador.getOne(idTrabajador!).subscribe((res) => {
        this.dtTrabajador = res.trabajador;
        console.log(this.dtTrabajador);
      });
    });
  }

  actualizar() {
    console.log(this.formTrabajador.value);
    this.apiTrabajador
      .update(this.formTrabajador.value, this.idActualizar)
      .subscribe((res) => {
        if (res === true) {
          Swal.fire({
            title: 'Exito',
            icon: 'success',
            text: 'Trabajador registrado correctamente',
          });
          this.router.navigate(['/dashboardAdmin/trabajador-all'])
          //console.log(res);
        }else{
          Swal.fire({
            title: 'Error...',
            icon: 'error',
            text: 'Ups! Algo Paso al actualizar'
          });
        }
      });
  }

  onFechaNacimientoChange(event: any) {
    // Aquí puedes manejar cualquier acción necesaria cuando cambie la fecha
  }
}
