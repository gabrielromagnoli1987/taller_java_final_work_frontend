import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgerieFormComponent } from './surgerie-form.component';

describe('SurgerieFormComponent', () => {
  let component: SurgerieFormComponent;
  let fixture: ComponentFixture<SurgerieFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurgerieFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurgerieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
