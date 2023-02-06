import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongesRefuserComponent } from './conges-refuser.component';

describe('CongesRefuserComponent', () => {
  let component: CongesRefuserComponent;
  let fixture: ComponentFixture<CongesRefuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongesRefuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CongesRefuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
