import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEmployesComponent } from './dashboard-employes.component';

describe('DashboardEmployesComponent', () => {
  let component: DashboardEmployesComponent;
  let fixture: ComponentFixture<DashboardEmployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEmployesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
