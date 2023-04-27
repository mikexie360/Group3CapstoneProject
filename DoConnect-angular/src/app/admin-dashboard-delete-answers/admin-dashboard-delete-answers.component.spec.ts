import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardDeleteAnswersComponent } from './admin-dashboard-delete-answers.component';

describe('AdminDashboardDeleteAnswersComponent', () => {
  let component: AdminDashboardDeleteAnswersComponent;
  let fixture: ComponentFixture<AdminDashboardDeleteAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardDeleteAnswersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardDeleteAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
