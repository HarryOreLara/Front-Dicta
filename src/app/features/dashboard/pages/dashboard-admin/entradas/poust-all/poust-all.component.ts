import { Component, OnInit } from '@angular/core';
import { ApiPostService } from '../../../dashboard-employes/shared/entrada/post/api-post.service';

@Component({
  selector: 'app-poust-all',
  templateUrl: './poust-all.component.html',
  styleUrls: ['./poust-all.component.scss']
})
export class PoustAllComponent implements OnInit{
  poust = [];

  cols = [
    { field: 'titulo', header: 'Titulo' },
    { field: 'creator', header: 'Autor' },
    { field: 'categoria', header: 'Categoria' },
    { field: 'etiqueta', header: 'Etiqueta' },
    { field: 'createdAt', header: 'Fecha' },
    { field: 'miniatura', header: 'Miniatura' },
  ];
  //Titulo, autor, categoria, etiqueta, fecha, status

  constructor(private apiPoust:ApiPostService){

  }

  ngOnInit(): void {
      this.read();
  }

  read(){
    this.apiPoust.getAllPoust().subscribe((res)=>{
      this.poust = res.poust;
      console.log(res.poust)
    })
  }
}
