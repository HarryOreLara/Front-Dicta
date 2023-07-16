import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LoginComponent } from 'src/app/core/auth/pages/login/login.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  boolName: boolean = false;
  username: any = "Harry";
  datito:any = "hola"
  
  valor:any = ''

  items: MenuItem[] = [
    {
      label: 'Niños',
      icon: '',
      routerLink: '/nav/ninos',
    },
    {
      label: 'Jovenes',
      icon: '',
      routerLink: '/nav/jovenes',
    },
    {
      label: 'Padres',
      icon: '',
      routerLink: '/nav/padres',
    },
    {
      label: 'Blog',
      icon: '',
      routerLink: '/nav/blog',
    },
    {
      label: 'Mundo Dictariano',
      icon: '',
      routerLink: '/nav/mundoDictariano',
    },
    {
      label: 'Academia',
      icon: '',
      items: [
        {
          label: 'Cursos',
          routerLink: '/nav/academia/cursos',
        },
        {
          label: 'Servicios',
          routerLink: '/nav/academia/servicios',
        },
      ],
    },
    {
      label:'Opciones',
      icon:'',
      items:[
        {
          label:'Apariencia',
          command:()=>this.changeApariencia()
        },
        {
          label:'Cerrar Sesion',
          command:()=>this.cerrarSesion()
        }
      ]
    }
  ];

  constructor(private router: Router, private authService: AuthService) {
    this.verificarLocal();
  }

  ngOnInit(): void {
  }

  verificarLocal(){
    if (localStorage.length === 0) {
      this.boolName = false;
    } else {
      this.valor = JSON.parse(localStorage.getItem('user')!);
      this.username = this.valor.username;
      this.boolName = true;
    }    
  }

  cerrarSesion(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  changeApariencia(){

  }
}
