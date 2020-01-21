import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproductiveHistoryFormComponent } from './reproductive-history-form.component';

describe('ReproductiveHistoryFormComponent', () => {
  let component: ReproductiveHistoryFormComponent;
  let fixture: ComponentFixture<ReproductiveHistoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReproductiveHistoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReproductiveHistoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
