import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardDeleteQuestionsComponent } from './admin-dashboard-delete-questions.component';

describe('AdminDashboardDeleteQuestionsComponent', () => {
  let component: AdminDashboardDeleteQuestionsComponent;
  let fixture: ComponentFixture<AdminDashboardDeleteQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardDeleteQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardDeleteQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
