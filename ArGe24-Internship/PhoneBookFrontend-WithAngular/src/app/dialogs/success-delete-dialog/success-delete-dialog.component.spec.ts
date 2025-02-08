import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessDeleteDialogComponent } from './success-delete-dialog.component';

describe('SuccessDeleteDialogComponent', () => {
  let component: SuccessDeleteDialogComponent;
  let fixture: ComponentFixture<SuccessDeleteDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessDeleteDialogComponent]
    });
    fixture = TestBed.createComponent(SuccessDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
