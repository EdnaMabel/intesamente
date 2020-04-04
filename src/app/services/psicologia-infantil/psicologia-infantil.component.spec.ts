import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicologiaInfantilComponent } from './psicologia-infantil.component';

describe('PsicologiaInfantilComponent', () => {
  let component: PsicologiaInfantilComponent;
  let fixture: ComponentFixture<PsicologiaInfantilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsicologiaInfantilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsicologiaInfantilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
