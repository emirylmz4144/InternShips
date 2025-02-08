import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAddedDialogComponent } from './success-added-dialog.component';

describe('SuccessAddedDialogComponent', () => {
  let component: SuccessAddedDialogComponent;
  let fixture: ComponentFixture<SuccessAddedDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessAddedDialogComponent]
    });
    fixture = TestBed.createComponent(SuccessAddedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
