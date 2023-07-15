import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesAllComponent } from './roles-all.component';

describe('RolesAllComponent', () => {
  let component: RolesAllComponent;
  let fixture: ComponentFixture<RolesAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
