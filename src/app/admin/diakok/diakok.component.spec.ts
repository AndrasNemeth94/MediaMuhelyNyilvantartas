import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiakokComponent } from './diakok.component';

describe('DiakokComponent', () => {
  let component: DiakokComponent;
  let fixture: ComponentFixture<DiakokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiakokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiakokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
