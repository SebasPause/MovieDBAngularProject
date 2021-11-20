import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPeliculasComponent } from './lista-peliculas.component';

describe('ListaPeliculasComponent', () => {
  let component: ListaPeliculasComponent;
  let fixture: ComponentFixture<ListaPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
