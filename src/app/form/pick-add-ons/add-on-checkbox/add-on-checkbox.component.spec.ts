import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnCheckboxComponent } from './add-on-checkbox.component';

describe('AddOnCheckboxComponent', () => {
  let component: AddOnCheckboxComponent;
  let fixture: ComponentFixture<AddOnCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOnCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOnCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
