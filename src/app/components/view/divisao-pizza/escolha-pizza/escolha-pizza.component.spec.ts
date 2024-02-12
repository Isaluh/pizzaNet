import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaPizzaComponent } from './escolha-pizza.component';

describe('EscolhaPizzaComponent', () => {
  let component: EscolhaPizzaComponent;
  let fixture: ComponentFixture<EscolhaPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscolhaPizzaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscolhaPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
