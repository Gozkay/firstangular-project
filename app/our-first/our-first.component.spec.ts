import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFirstComponent } from './our-first.component';

describe('OurFirstComponent', () => {
  let component: OurFirstComponent;
  let fixture: ComponentFixture<OurFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurFirstComponent]
    });
    fixture = TestBed.createComponent(OurFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
