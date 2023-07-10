import { Component } from '@angular/core';
import { CardPadresService } from 'src/app/shared/services/service-datos-nav/card-padres.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {


  constructor(private infCard:CardPadresService) { }

  get information(){
    return this.infCard.data;
  }

}
