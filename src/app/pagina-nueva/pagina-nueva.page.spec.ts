import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNuevaPage } from './pagina-nueva.page';

describe('PaginaNuevaPage', () => {
  let component: PaginaNuevaPage;
  let fixture: ComponentFixture<PaginaNuevaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaNuevaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaNuevaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
