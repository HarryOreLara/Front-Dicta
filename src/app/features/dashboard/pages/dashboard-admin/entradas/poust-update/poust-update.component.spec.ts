import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoustUpdateComponent } from './poust-update.component';

describe('PoustUpdateComponent', () => {
  let component: PoustUpdateComponent;
  let fixture: ComponentFixture<PoustUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoustUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoustUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
