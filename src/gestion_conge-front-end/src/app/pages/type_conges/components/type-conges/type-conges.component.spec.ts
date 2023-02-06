import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCongesComponent } from './type-conges.component';

describe('TypeCongesComponent', () => {
  let component: TypeCongesComponent;
  let fixture: ComponentFixture<TypeCongesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeCongesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeCongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
