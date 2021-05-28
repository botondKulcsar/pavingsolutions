import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PavingComponent } from './paving.component';

describe('PavingComponent', () => {
  let component: PavingComponent;
  let fixture: ComponentFixture<PavingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PavingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
