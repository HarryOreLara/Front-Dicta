import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MundoDictarianoComponent } from './mundo-dictariano.component';

describe('MundoDictarianoComponent', () => {
  let component: MundoDictarianoComponent;
  let fixture: ComponentFixture<MundoDictarianoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MundoDictarianoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MundoDictarianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
