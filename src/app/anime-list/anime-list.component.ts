import {Component, OnInit} from '@angular/core';
import {AnimeListService} from "../service/anime-list.service";

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit{
  public constructor(private animeListService: AnimeListService) {
  }

  public ngOnInit(): void {
    }


}
