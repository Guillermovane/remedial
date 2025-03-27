import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsercaDeComponent } from './aserca-de.component';

describe('AsercaDeComponent', () => {
  let component: AsercaDeComponent;
  let fixture: ComponentFixture<AsercaDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsercaDeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsercaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
