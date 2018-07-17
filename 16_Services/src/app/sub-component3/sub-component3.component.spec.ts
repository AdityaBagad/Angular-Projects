import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubComponent3Component } from './sub-component3.component';

describe('SubComponent3Component', () => {
  let component: SubComponent3Component;
  let fixture: ComponentFixture<SubComponent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubComponent3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
