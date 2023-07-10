import { Component } from '@angular/core';
import { CardPadresService } from 'src/app/shared/services/service-datos-nav/card-padres.service';

@Component({
  selector: 'app-padres',
  templateUrl: './padres.component.html',
  styleUrls: ['./padres.component.scss']
})
export class PadresComponent {


  products:any = []

  responsiveOptions:any = {}

  constructor(private infCard:CardPadresService) { }

  get information(){
    return this.infCard.data;
  }


  getSeverity(data:any){

  }
}
