import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relocate } from './relocate';

describe('Relocate', () => {
  let component: Relocate;
  let fixture: ComponentFixture<Relocate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Relocate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Relocate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
