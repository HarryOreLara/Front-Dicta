import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../dashboard-employes/shared/usuarios/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios-all',
  templateUrl: './usuarios-all.component.html',
  styleUrls: ['./usuarios-all.component.scss'],
})
export class UsuariosAllComponent implements OnInit {
  users: any = [];

  constructor(
    private apiUsers: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.apiUsers.read().subscribe((res) => {
      this.users = res.usuario;
      console.log(this.users);
    });
  }

  read() {
    this.apiUsers.read().subscribe((res) => {
      this.users = res.usuario;
    });
  }

  navegarUpdate(id: string) {
    this.router.navigate(['/dashboardAdmin/usuario-update', id]);
  }

  eliminarTrabajador(id: string) {
    this.apiUsers.delete(id).subscribe((res)=>{
      if (res==true) {
        Swal.fire({
          title:'Exito',
          icon: 'success',
          text:'Trabajador eliminado correctamente'
        });
        this.read();
      }else{
        Swal.fire({
          title: 'Error...',
          icon: 'error',
          text: res
        });
      }
    })
  }
}
