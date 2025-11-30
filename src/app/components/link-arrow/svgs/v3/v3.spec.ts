import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3 } from './v3';

describe('V3', () => {
  let component: V3;
  let fixture: ComponentFixture<V3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
