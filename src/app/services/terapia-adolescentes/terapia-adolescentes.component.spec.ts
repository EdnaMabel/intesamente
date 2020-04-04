import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapiaAdolescentesComponent } from './terapia-adolescentes.component';

describe('TerapiaAdolescentesComponent', () => {
  let component: TerapiaAdolescentesComponent;
  let fixture: ComponentFixture<TerapiaAdolescentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerapiaAdolescentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerapiaAdolescentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
