import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklayerComponent } from './backlayer.component';

describe('BacklayerComponent', () => {
  let component: BacklayerComponent;
  let fixture: ComponentFixture<BacklayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BacklayerComponent]
    });
    fixture = TestBed.createComponent(BacklayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
