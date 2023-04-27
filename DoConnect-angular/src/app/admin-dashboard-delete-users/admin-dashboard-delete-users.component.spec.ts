import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardDeleteUsersComponent } from './admin-dashboard-delete-users.component';

describe('AdminDashboardDeleteUsersComponent', () => {
  let component: AdminDashboardDeleteUsersComponent;
  let fixture: ComponentFixture<AdminDashboardDeleteUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardDeleteUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardDeleteUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
