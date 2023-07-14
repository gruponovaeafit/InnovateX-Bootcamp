import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCapitalComponent } from './by-capital.component';

describe('ByCapitalComponent', () => {
  let component: ByCapitalComponent;
  let fixture: ComponentFixture<ByCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByCapitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
