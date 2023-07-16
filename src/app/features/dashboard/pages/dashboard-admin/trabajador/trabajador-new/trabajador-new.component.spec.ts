import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadorNewComponent } from './trabajador-new.component';

describe('TrabajadorNewComponent', () => {
  let component: TrabajadorNewComponent;
  let fixture: ComponentFixture<TrabajadorNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajadorNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajadorNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
