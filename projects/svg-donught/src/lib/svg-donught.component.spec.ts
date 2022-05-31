import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDonughtComponent } from './svg-donught.component';

describe('SvgDonughtComponent', () => {
  let component: SvgDonughtComponent;
  let fixture: ComponentFixture<SvgDonughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgDonughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgDonughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
