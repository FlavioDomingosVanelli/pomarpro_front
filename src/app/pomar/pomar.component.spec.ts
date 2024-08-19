import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomarComponent } from './pomar.component';

describe('PomarComponent', () => {
  let component: PomarComponent;
  let fixture: ComponentFixture<PomarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PomarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PomarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
