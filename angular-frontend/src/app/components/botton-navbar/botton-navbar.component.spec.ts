import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonNavbarComponent } from './botton-navbar.component';

describe('BottonNavbarComponent', () => {
  let component: BottonNavbarComponent;
  let fixture: ComponentFixture<BottonNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottonNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
