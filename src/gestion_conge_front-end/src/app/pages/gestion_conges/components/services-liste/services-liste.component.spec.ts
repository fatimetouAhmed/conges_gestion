import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesListeComponent } from './services-liste.component';

describe('ServicesListeComponent', () => {
  let component: ServicesListeComponent;
  let fixture: ComponentFixture<ServicesListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
