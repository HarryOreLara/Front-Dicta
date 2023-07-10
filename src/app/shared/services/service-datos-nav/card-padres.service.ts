import { Injectable } from '@angular/core';
import { iformationCard } from 'src/app/shared/utils/data/data-users/padresBeneficios.data';

@Injectable({
  providedIn: 'root'
})
export class CardPadresService {

  private _data = iformationCard;


  constructor() { }


  get data(){
    return this._data;
  }
}
