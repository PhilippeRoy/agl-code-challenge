/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PetsPageComponent } from './pets-page.component';

describe('PetsPageComponent', () => {
  let component: PetsPageComponent;
  let fixture: ComponentFixture<PetsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PetsPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
