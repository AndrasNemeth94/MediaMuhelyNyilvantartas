import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbardiakComponent } from './navbardiak.component';

describe('NavbardiakComponent', () => {
  let component: NavbardiakComponent;
  let fixture: ComponentFixture<NavbardiakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbardiakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbardiakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
