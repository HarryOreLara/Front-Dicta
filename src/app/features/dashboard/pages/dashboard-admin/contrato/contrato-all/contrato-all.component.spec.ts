import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoAllComponent } from './contrato-all.component';

describe('ContratoAllComponent', () => {
  let component: ContratoAllComponent;
  let fixture: ComponentFixture<ContratoAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratoAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratoAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
