import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolingComponent } from './tooling.component';

describe('ToolingComponent', () => {
  let component: ToolingComponent;
  let fixture: ComponentFixture<ToolingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolingComponent]
    });
    fixture = TestBed.createComponent(ToolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
