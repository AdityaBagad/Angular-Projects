import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventComponentComponent } from './event-component.component';

describe('EventComponentComponent', () => {
  let component: EventComponentComponent;
  let fixture: ComponentFixture<EventComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
