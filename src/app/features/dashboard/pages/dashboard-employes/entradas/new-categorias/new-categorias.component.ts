import { Component, OnInit } from '@angular/core';
import { ApiCategoriaService } from '../../shared/entrada/categoria/api-categoria.service';

@Component({
  selector: 'app-new-categorias',
  templateUrl: './new-categorias.component.html',
  styleUrls: ['./new-categorias.component.scss']
})
export class NewCategoriasComponent implements OnInit{

  categorias:Array<any> = ['']

  constructor(private apiCategoria: ApiCategoriaService){}

  ngOnInit(): void {
      this.apiCategoria.read().subscribe((res)=>{
        this.categorias = res.categorias;
        console.log(res);
      })
  }


}
