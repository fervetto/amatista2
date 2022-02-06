import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDeJoyaComponent } from './tipo-de-joya.component';

describe('TipoDeJoyaComponent', () => {
  let component: TipoDeJoyaComponent;
  let fixture: ComponentFixture<TipoDeJoyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoDeJoyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDeJoyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
