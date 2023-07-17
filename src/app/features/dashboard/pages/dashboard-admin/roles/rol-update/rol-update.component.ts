import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { RolService } from '../../shared/rol.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-rol-update',
  templateUrl: './rol-update.component.html',
  styleUrls: ['./rol-update.component.scss']
})
export class RolUpdateComponent {
  formRol:FormGroup = this.fb.group({
    numRol:['', [Validators.required, Validators.minLength(1), Validators.maxLength(3)]],
    nombreRol:['', [Validators.required, Validators.minLength(10)]]

  })

  constructor(private fb:FormBuilder, private apiRol:RolService, private route:ActivatedRoute){}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params=>{
      let id = params.get('id');
      console.log(id)
      this.apiRol.readOne(id!).subscribe((res)=>{
        console.log(res);
      })
    })
  }

    actualizar(){
    }

}
