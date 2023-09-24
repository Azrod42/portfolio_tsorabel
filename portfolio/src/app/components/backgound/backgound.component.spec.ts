import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgoundComponent } from './backgound.component';

describe('BackgoundComponent', () => {
  let component: BackgoundComponent;
  let fixture: ComponentFixture<BackgoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackgoundComponent]
    });
    fixture = TestBed.createComponent(BackgoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
