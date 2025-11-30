import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V4 } from './v4';

describe('V4', () => {
  let component: V4;
  let fixture: ComponentFixture<V4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
