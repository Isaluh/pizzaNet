import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisaoPizzaComponent } from './divisao-pizza.component';

describe('DivisaoPizzaComponent', () => {
  let component: DivisaoPizzaComponent;
  let fixture: ComponentFixture<DivisaoPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivisaoPizzaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DivisaoPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
