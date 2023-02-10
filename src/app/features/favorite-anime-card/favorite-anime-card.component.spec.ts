import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteAnimeCardComponent } from './favorite-anime-card.component';

describe('FavoriteAnimeCardComponent', () => {
  let component: FavoriteAnimeCardComponent;
  let fixture: ComponentFixture<FavoriteAnimeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteAnimeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteAnimeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
