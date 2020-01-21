import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DewormingFormComponent } from './deworming-form.component';

describe('DewormingFormComponent', () => {
  let component: DewormingFormComponent;
  let fixture: ComponentFixture<DewormingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DewormingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DewormingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
