import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessUpdateDialogComponent } from './success-update-dialog.component';

describe('SuccessUpdateDialogComponent', () => {
  let component: SuccessUpdateDialogComponent;
  let fixture: ComponentFixture<SuccessUpdateDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessUpdateDialogComponent]
    });
    fixture = TestBed.createComponent(SuccessUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
