import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ongoing } from './ongoing';

describe('Ongoing', () => {
  let component: Ongoing;
  let fixture: ComponentFixture<Ongoing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ongoing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ongoing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
