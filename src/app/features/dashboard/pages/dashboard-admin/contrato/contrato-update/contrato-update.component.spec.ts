import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoUpdateComponent } from './contrato-update.component';

describe('ContratoUpdateComponent', () => {
  let component: ContratoUpdateComponent;
  let fixture: ComponentFixture<ContratoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratoUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
