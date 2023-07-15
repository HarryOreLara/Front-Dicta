import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../dashboard-employes/shared/usuarios/user.service';

@Component({
  selector: 'app-usuarios-all',
  templateUrl: './usuarios-all.component.html',
  styleUrls: ['./usuarios-all.component.scss']
})
export class UsuariosAllComponent implements OnInit{
  users:any = [];

  cols = [
    { field: 'username', header: 'Username' },
    { field: 'email', header: 'Email' },
    { field: 'rol', header: 'Rol' },
    { field: 'nPoust', header: 'N° Posts' }
  ];

  constructor( private apiUsers:UserService){}

  ngOnInit(): void {
    this.apiUsers.read().subscribe((res)=>{
      this.users = res.usuario;
      console.log(this.users);
    });
  }

  read(){
    this.apiUsers.read().subscribe((res)=>{
      this.users = res.usuario;

    });
  }
}
