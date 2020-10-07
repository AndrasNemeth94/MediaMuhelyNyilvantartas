import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisztralComponent } from './regisztral.component';

describe('RegisztralComponent', () => {
  let component: RegisztralComponent;
  let fixture: ComponentFixture<RegisztralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisztralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisztralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
