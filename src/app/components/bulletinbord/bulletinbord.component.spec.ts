import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinbordComponent } from './bulletinbord.component';

describe('BulletinbordComponent', () => {
  let component: BulletinbordComponent;
  let fixture: ComponentFixture<BulletinbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulletinbordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BulletinbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
