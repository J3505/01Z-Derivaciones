import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasDerivacionesComponent } from './tablas-derivaciones.component';

describe('TablasDerivacionesComponent', () => {
  let component: TablasDerivacionesComponent;
  let fixture: ComponentFixture<TablasDerivacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablasDerivacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablasDerivacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
