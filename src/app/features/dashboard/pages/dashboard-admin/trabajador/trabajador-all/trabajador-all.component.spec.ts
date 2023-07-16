import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadorAllComponent } from './trabajador-all.component';

describe('TrabajadorAllComponent', () => {
  let component: TrabajadorAllComponent;
  let fixture: ComponentFixture<TrabajadorAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajadorAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajadorAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
