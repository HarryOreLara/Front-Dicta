import { Component, OnInit } from '@angular/core';
import { ContratoService } from '../../shared/contrato.service';

@Component({
  selector: 'app-contrato-all',
  templateUrl: './contrato-all.component.html',
  styleUrls: ['./contrato-all.component.scss']
})
export class ContratoAllComponent implements OnInit{


  contratos: any[] = []; // Aquí tendrás tus datos de contratos
  rolToUpdate: string = ''; // Variable para almacenar el nuevo rol

  constructor(private apiContrato: ContratoService){}

  ngOnInit(): void {
    this.readAll();
  }


  readAll(){
    this.apiContrato.readAll().subscribe((res)=>{
      console.log(res);

      this.contratos = res.contrato;
    })
  }



}
