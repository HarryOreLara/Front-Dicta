import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-usuario',
  templateUrl: './new-usuario.component.html',
  styleUrls: ['./new-usuario.component.scss']
})
export class NewUsuarioComponent implements OnInit {
  mostrar:boolean = false;

  formRegister: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2:['', [Validators.required, Validators.minLength(6)]],
    rol:['3']
  });

  roles = [
    {
      name: 1
    },
    {
      name: 2
    },
    {
      name:3
    }
  ]
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  register() {
    const {password, password2} = this.formRegister.value;

    if (password===password2) {
      this.authService.registerService(this.formRegister.value).subscribe((res)=>{
        if(res===true){
          localStorage.setItem('user', JSON.stringify(this.authService.user));
          this.router.navigate(['']);
        }else{
          Swal.fire({
            title: 'Error...',
            icon: 'error',
            text:res
          });
        }
      });
    }else{
      Swal.fire({
        title: 'Error...',
        icon: 'error',
        text: 'Las contraseñas deben ser iguales'
      });
    }
  }
}
