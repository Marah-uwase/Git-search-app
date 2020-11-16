import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersRepositoriesComponent } from './users-repositories.component';

describe('UsersRepositoriesComponent', () => {
  let component: UsersRepositoriesComponent;
  let fixture: ComponentFixture<UsersRepositoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersRepositoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
