import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosAllComponent } from './usuarios-all.component';

describe('UsuariosAllComponent', () => {
  let component: UsuariosAllComponent;
  let fixture: ComponentFixture<UsuariosAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
