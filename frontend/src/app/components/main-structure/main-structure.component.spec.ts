import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStructureComponent } from './main-structure.component';

describe('MainStructureComponent', () => {
  let component: MainStructureComponent;
  let fixture: ComponentFixture<MainStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainStructureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
