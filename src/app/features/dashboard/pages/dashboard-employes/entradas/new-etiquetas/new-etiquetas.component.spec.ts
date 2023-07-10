import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEtiquetasComponent } from './new-etiquetas.component';

describe('NewEtiquetasComponent', () => {
  let component: NewEtiquetasComponent;
  let fixture: ComponentFixture<NewEtiquetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEtiquetasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEtiquetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
