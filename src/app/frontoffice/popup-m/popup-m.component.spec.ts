import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMComponent } from './popup-m.component';

describe('PopupMComponent', () => {
  let component: PopupMComponent;
  let fixture: ComponentFixture<PopupMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopupMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
