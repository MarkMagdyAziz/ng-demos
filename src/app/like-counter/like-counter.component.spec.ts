import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeCounterComponent } from './like-counter.component';

describe('LikeCounterComponent', () => {
  let component: LikeCounterComponent;
  let fixture: ComponentFixture<LikeCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikeCounterComponent]
    });
    fixture = TestBed.createComponent(LikeCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
