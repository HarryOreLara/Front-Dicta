import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoustAllComponent } from './poust-all.component';

describe('PoustAllComponent', () => {
  let component: PoustAllComponent;
  let fixture: ComponentFixture<PoustAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoustAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoustAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
