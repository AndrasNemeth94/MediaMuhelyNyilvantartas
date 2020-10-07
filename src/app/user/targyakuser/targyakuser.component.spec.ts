import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargyakuserComponent } from './targyakuser.component';

describe('TargyakuserComponent', () => {
  let component: TargyakuserComponent;
  let fixture: ComponentFixture<TargyakuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargyakuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargyakuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
