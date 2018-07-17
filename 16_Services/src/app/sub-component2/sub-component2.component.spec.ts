import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubComponent2Component } from './sub-component2.component';

describe('SubComponent2Component', () => {
  let component: SubComponent2Component;
  let fixture: ComponentFixture<SubComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
