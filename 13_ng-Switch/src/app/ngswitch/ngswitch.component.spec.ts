import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchComponent } from './ngswitch.component';

describe('NgswitchComponent', () => {
  let component: NgswitchComponent;
  let fixture: ComponentFixture<NgswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
