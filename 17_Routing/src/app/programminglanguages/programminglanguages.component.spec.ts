import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramminglanguagesComponent } from './programminglanguages.component';

describe('ProgramminglanguagesComponent', () => {
  let component: ProgramminglanguagesComponent;
  let fixture: ComponentFixture<ProgramminglanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramminglanguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramminglanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
