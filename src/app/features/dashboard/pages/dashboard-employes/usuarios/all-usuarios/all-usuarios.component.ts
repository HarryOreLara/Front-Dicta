import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/usuarios/user.service';

@Component({
  selector: 'app-all-usuarios',
  templateUrl: './all-usuarios.component.html',
  styleUrls: ['./all-usuarios.component.scss']
})
export class AllUsuariosComponent implements OnInit {
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
