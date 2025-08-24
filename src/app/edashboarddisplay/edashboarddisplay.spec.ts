import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edashboarddisplay } from './edashboarddisplay';

describe('Edashboarddisplay', () => {
  let component: Edashboarddisplay;
  let fixture: ComponentFixture<Edashboarddisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Edashboarddisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Edashboarddisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
