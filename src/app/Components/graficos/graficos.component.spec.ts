import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoComponent } from './graficos.component';

describe('GraficoComponent', () => {
  let component: GraficoComponent;
  let fixture: ComponentFixture<GraficoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});