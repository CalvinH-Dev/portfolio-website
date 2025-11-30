import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2 } from './v2';

describe('V2', () => {
  let component: V2;
  let fixture: ComponentFixture<V2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
