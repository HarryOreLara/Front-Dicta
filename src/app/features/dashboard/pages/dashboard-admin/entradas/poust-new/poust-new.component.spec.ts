import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoustNewComponent } from './poust-new.component';

describe('PoustNewComponent', () => {
  let component: PoustNewComponent;
  let fixture: ComponentFixture<PoustNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoustNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoustNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
