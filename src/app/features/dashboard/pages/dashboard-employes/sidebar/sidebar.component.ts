import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  items:any[];

  constructor() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        items:[
          {
            label: 'Escritorio',
            icon: 'pi pi-fw pi-pencil',
            routerLink:'/dashboardEmployes'
          },
          {
            label: 'Version',
            icon: 'pi pi-fw pi-tags',
            routerLink:'/dashboardEmployes/version'
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
            routerLink:'/dashboardEmployes/all-post'
          },
          {
            label: 'Añadir nueva entrada',
            icon: 'pi pi-fw pi-calendar',
            routerLink:'/dashboardEmployes/new-post'
          },
          {
            label: 'Categorías',
            icon: 'pi pi-fw pi-calendar',
            routerLink:'/dashboardEmployes/new-categoria'
          },
          {
            label: 'Etiquetas',
            icon: 'pi pi-fw pi-calendar',
            routerLink:'/dashboardEmployes/new-etiqueta'
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
            routerLink:'/dashboardEmployes/all-usuarios'
          },
          {
            label: 'Perfil',
            icon: 'pi pi-fw pi-calendar',
            routerLink:'/dashboardEmployes/perfil'
          }
        ]
      },
      {
        label: 'Roles',
        icon: 'pi pi-users',
        items: [
          {
            label: 'Todos los roles',
            icon: 'pi pi-fw pi-search',
            routerLink:'/dashboardEmployes/roles'
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
        icon: 'pi pi-power-off'
      }
    ];
   }

}
