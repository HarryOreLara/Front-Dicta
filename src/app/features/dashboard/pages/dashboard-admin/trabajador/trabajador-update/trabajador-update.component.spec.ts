import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadorUpdateComponent } from './trabajador-update.component';

describe('TrabajadorUpdateComponent', () => {
  let component: TrabajadorUpdateComponent;
  let fixture: ComponentFixture<TrabajadorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajadorUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajadorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
