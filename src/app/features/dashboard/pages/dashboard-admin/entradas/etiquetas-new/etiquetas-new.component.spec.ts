import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtiquetasNewComponent } from './etiquetas-new.component';

describe('EtiquetasNewComponent', () => {
  let component: EtiquetasNewComponent;
  let fixture: ComponentFixture<EtiquetasNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtiquetasNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtiquetasNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
