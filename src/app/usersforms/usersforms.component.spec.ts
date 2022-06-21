import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersformsComponent } from './usersforms.component';

describe('UsersformsComponent', () => {
  let component: UsersformsComponent;
  let fixture: ComponentFixture<UsersformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
