import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoNewComponent } from './contrato-new.component';

describe('ContratoNewComponent', () => {
  let component: ContratoNewComponent;
  let fixture: ComponentFixture<ContratoNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratoNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
