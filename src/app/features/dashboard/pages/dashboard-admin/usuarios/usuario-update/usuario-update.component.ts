import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';
import { UserService } from '../../../dashboard-employes/shared/usuarios/user.service';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.scss'],
})
export class UsuarioUpdateComponent implements OnInit {

  dtUser:any = {};

  mostrar: boolean = false;

  formRegister: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]],
    rol: ['3'],
  });

  roles = [
    {
      name: 1,
    },
    {
      name: 2,
    },
    {
      name: 3,
    },
  ];

  selectedCity: string = '';

  idActualizar: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private apiUsers: UserService,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      let idUser = params.get('id');
      this.idActualizar = params.get('id')!;

      this.apiUsers.readOne(idUser!).subscribe((res)=>{
        this.dtUser = res.usuario;
      })
    })



  }




  actualizar(){
    console.log(this.formRegister.value)
    this.apiUsers.update(this.formRegister.value, this.idActualizar).subscribe((res)=>{
      if (res===true) {
        Swal.fire({
          title: 'Exito',
          icon: 'success',
          text: 'Trabajador registrado correctamente',
        });
        this.router.navigate(['/dashboardAdmin/usuarios-all'])
      }else{
        Swal.fire({
          title: 'Error...',
          icon: 'error',
          text: 'Ups! Algo Paso al actualizar'
        });
      }
    })
  }


  
}
