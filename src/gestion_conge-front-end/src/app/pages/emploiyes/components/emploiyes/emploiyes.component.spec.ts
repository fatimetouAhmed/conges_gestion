import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploiyesComponent } from './emploiyes.component';

describe('EmploiyesComponent', () => {
  let component: EmploiyesComponent;
  let fixture: ComponentFixture<EmploiyesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploiyesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploiyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
