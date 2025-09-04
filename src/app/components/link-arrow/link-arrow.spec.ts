import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkArrow } from './link-arrow';

describe('LinkArrow', () => {
  let component: LinkArrow;
  let fixture: ComponentFixture<LinkArrow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkArrow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkArrow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
