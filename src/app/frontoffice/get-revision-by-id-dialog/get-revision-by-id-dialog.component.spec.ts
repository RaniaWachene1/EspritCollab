import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRevisionByIdDialogComponent } from './get-revision-by-id-dialog.component';

describe('GetRevisionByIdDialogComponent', () => {
  let component: GetRevisionByIdDialogComponent;
  let fixture: ComponentFixture<GetRevisionByIdDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetRevisionByIdDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetRevisionByIdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
