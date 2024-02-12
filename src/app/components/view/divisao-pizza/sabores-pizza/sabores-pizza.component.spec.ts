import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaboresPizzaComponent } from './sabores-pizza.component';

describe('SaboresPizzaComponent', () => {
  let component: SaboresPizzaComponent;
  let fixture: ComponentFixture<SaboresPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaboresPizzaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaboresPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
