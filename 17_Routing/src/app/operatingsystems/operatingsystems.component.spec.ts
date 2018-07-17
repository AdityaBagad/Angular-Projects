import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatingsystemsComponent } from './operatingsystems.component';

describe('OperatingsystemsComponent', () => {
  let component: OperatingsystemsComponent;
  let fixture: ComponentFixture<OperatingsystemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatingsystemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatingsystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
