import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongesConfirmerComponent } from './conges-confirmer.component';

describe('CongesConfirmerComponent', () => {
  let component: CongesConfirmerComponent;
  let fixture: ComponentFixture<CongesConfirmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongesConfirmerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CongesConfirmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
