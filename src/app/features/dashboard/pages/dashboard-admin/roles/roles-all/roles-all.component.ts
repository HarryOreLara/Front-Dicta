import { Component, OnInit } from '@angular/core';
import { RolService } from '../../shared/rol.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles-all',
  templateUrl: './roles-all.component.html',
  styleUrls: ['./roles-all.component.scss']
})
export class RolesAllComponent implements OnInit {

  //const url = `http://localhost:3000/rol/readone/${idRol}`;
  constructor( private apiRol:RolService, private router:Router){}

  roles:any =[];
  rolToUpdate: string = '';

  ngOnInit(): void {
    this.read();
  }
  
  read(){
    this.apiRol.readAll().subscribe((res)=>{
      console.log(res.rol)
      this.roles = res.rol;
    })
  }


  updateRol(){

  }



  navegarUpdate(id:string){
    this.router.navigate(['/dashboardAdmin/rol-update', id])
  }
}
