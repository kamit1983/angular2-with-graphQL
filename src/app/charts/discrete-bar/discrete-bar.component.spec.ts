import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscreteBarComponent } from './discrete-bar.component';

describe('DiscreteBarComponent', () => {
  let component: DiscreteBarComponent;
  let fixture: ComponentFixture<DiscreteBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscreteBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscreteBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
