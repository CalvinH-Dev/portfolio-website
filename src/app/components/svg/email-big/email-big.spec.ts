import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailBig } from './email-big';

describe('EmailBig', () => {
  let component: EmailBig;
  let fixture: ComponentFixture<EmailBig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailBig]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailBig);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
