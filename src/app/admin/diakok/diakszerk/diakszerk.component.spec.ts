import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiakszerkComponent } from './diakszerk.component';

describe('DiakszerkComponent', () => {
  let component: DiakszerkComponent;
  let fixture: ComponentFixture<DiakszerkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiakszerkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiakszerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
