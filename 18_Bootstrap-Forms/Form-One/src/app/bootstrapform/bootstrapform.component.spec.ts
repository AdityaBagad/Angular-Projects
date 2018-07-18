import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapformComponent } from './bootstrapform.component';

describe('BootstrapformComponent', () => {
  let component: BootstrapformComponent;
  let fixture: ComponentFixture<BootstrapformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
