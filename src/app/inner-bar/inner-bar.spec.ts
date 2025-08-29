import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerBar } from './inner-bar';

describe('InnerBar', () => {
  let component: InnerBar;
  let fixture: ComponentFixture<InnerBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnerBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
