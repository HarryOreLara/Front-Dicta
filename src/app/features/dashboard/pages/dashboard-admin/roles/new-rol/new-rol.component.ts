import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-rol',
  templateUrl: './new-rol.component.html',
  styleUrls: ['./new-rol.component.scss']
})
export class NewRolComponent implements OnInit{

  formRol:FormGroup = this.fb.group({

  })

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    



  }


  guardar(){
    
  }
}
