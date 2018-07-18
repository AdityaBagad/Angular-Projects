import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormvalidComponent } from './formvalid.component';

describe('FormvalidComponent', () => {
  let component: FormvalidComponent;
  let fixture: ComponentFixture<FormvalidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormvalidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormvalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
