import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictComponentComponent } from './district-component.component';

describe('DistrictComponentComponent', () => {
  let component: DistrictComponentComponent;
  let fixture: ComponentFixture<DistrictComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
