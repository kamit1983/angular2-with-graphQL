import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiBarComponent } from './multi-bar.component';

describe('MultiBarComponent', () => {
  let component: MultiBarComponent;
  let fixture: ComponentFixture<MultiBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
