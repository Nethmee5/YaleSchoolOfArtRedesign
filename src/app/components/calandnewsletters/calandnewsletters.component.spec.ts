import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalandnewslettersComponent } from './calandnewsletters.component';

describe('CalandnewslettersComponent', () => {
  let component: CalandnewslettersComponent;
  let fixture: ComponentFixture<CalandnewslettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalandnewslettersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalandnewslettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
