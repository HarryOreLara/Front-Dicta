import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../dashboard-employes/shared/usuarios/user.service';

@Component({
  selector: 'app-usuarios-all',
  templateUrl: './usuarios-all.component.html',
  styleUrls: ['./usuarios-all.component.scss']
})
export class UsuariosAllComponent implements OnInit{
  users:any = [];


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
