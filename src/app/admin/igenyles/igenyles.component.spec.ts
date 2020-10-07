import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgenylesComponent } from './igenyles.component';

describe('IgenylesComponent', () => {
  let component: IgenylesComponent;
  let fixture: ComponentFixture<IgenylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgenylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgenylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
