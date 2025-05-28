import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextAccountComponent } from './input-text-account.component';

describe('InputTextAccountComponent', () => {
  let component: InputTextAccountComponent;
  let fixture: ComponentFixture<InputTextAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTextAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTextAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
