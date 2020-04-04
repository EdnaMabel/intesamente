import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapiaOcupacionalComponent } from './terapia-ocupacional.component';

describe('TerapiaOcupacionalComponent', () => {
  let component: TerapiaOcupacionalComponent;
  let fixture: ComponentFixture<TerapiaOcupacionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerapiaOcupacionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerapiaOcupacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
