import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.scss']
})
export class SidebarAdminComponent {
  items:any[];

  constructor(private router:Router) {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        items:[
          {
            label: 'Escritorio',
            icon: 'pi pi-fw pi-pencil',
            routerLink:'/dashboardAdmin'
          },
          {
            label: 'Version',
            icon: 'pi pi-fw pi-tags',
            routerLink:'/dashboardAdmin/version'
          }
        ]
      },
      {
        label: 'Entradas',
        icon: 'pi pi-tags',
        items: [
          {
            label: 'Todas las entradas',
            icon: 'pi pi-fw pi-search',
            routerLink:'/dashboardAdmin/poust-all'
          },
          {
            label: 'Añadir nueva entrada',
            icon: 'pi pi-fw pi-calendar',
            routerLink:'/dashboardAdmin/poust-new'
          },
          {
            label: 'Categorías',
            icon: 'pi pi-fw pi-calendar',
            routerLink:'/dashboardAdmin/categoria-new'
          },
          {
            label: 'Etiquetas',
            icon: 'pi pi-fw pi-calendar',
            routerLink:'/dashboardAdmin/etiqueta-new'
          }
        ]
      },
      {
        label:'Trabajadores',
        icons:'pi pi-fw pi-calendar',
        items:[
          {
            label:'Todos los trabajadores',
            icon: 'pi pi-fw pi-search',
            routerLink: '/dashboardAdmin/trabajador-all'
          },
          {
            label:'Nuevo Trabajador',
            icon: 'pi pi-fw pi-search',
            routerLink: '/dashboardAdmin/trabajador-new'
          }
        ]
      },
      {
        label:'Contrato',
        icon: 'pi pi-fw pi-calendar',
        items:[
          {
            label:'Todos los contratos',
            icon: 'pi pi-fw pi-search',
            routerLink: '/dashboardAdmin/contrato-all'
          },
          {
            label:'Nuevo Contrato',
            icon: 'pi pi-fw pi-search',
            routerLink: '/dashboardAdmin/contrato-new'
          }
        ]
      },
      {
        label: 'Usuarios',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Todos los usuarios',
            icon: 'pi pi-fw pi-search',
            routerLink:'/dashboardAdmin/usuarios-all'
          },
          {
            label: 'Nuevo Usuario',
            icon: 'pi pi-user',
            routerLink:'/dashboardAdmin/newUsuario'
          },
          {
            label: 'Perfil',
            icon: 'pi pi-fw pi-calendar',
            routerLink:'/dashboardAdmin/perfilAdmin'
          },
        ]
      },
      {
        label: 'Roles',
        icon: 'pi pi-users',
        items: [
          {
            label: 'Todos los roles',
            icon: 'pi pi-fw pi-search',
            routerLink:'/dashboardAdmin/roles'
          },
          {
            label:'Nuevo Rol',
            icon: 'pi pi-fw pi-search',
            routerLink: '/dashboardAdmin/newRol'
          }
        ]
      },
      {
        label: 'Apariencia',
        icon: 'pi pi-moon',
        items: [
          {
            label: 'Modo claro',
            icon: 'pi pi-fw pi-search'
          },
          {
            label: 'Modo oscuro',
            icon: 'pi pi-fw pi-calendar'
          }
        ]
      },
      {
        label: 'Cerrar Sesion',
        icon: 'pi pi-power-off',
        command:()=>this.cerrarSesion()
      }
    ];
   }
   
   cerrarSesion(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
