import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovingtrainerComponent } from './approvingtrainer.component';

describe('ApprovingtrainerComponent', () => {
  let component: ApprovingtrainerComponent;
  let fixture: ComponentFixture<ApprovingtrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovingtrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovingtrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
