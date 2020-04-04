import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapiaParejaComponent } from './terapia-pareja.component';

describe('TerapiaParejaComponent', () => {
  let component: TerapiaParejaComponent;
  let fixture: ComponentFixture<TerapiaParejaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerapiaParejaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerapiaParejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
