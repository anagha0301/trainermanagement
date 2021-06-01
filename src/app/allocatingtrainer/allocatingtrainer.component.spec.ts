import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocatingtrainerComponent } from './allocatingtrainer.component';

describe('AllocatingtrainerComponent', () => {
  let component: AllocatingtrainerComponent;
  let fixture: ComponentFixture<AllocatingtrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocatingtrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocatingtrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
