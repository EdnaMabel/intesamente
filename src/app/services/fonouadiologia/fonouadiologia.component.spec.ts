import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FonouadiologiaComponent } from './fonouadiologia.component';

describe('FonouadiologiaComponent', () => {
  let component: FonouadiologiaComponent;
  let fixture: ComponentFixture<FonouadiologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FonouadiologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FonouadiologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
