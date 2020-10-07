import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgenyleseimComponent } from './igenyleseim.component';

describe('IgenyleseimComponent', () => {
  let component: IgenyleseimComponent;
  let fixture: ComponentFixture<IgenyleseimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgenyleseimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgenyleseimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
