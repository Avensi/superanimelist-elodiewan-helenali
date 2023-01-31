import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AnimeListService} from "../../service/anime-list.service";
import {Anime} from "../../model/anime";
import {lastValueFrom} from "rxjs";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit {
  public pageEvent!: PageEvent;
  public length: number = 56;
  public pageSize: number = 8;
  public pageIndex: number = 0;
  public animeList: Array<Anime> = new Array<Anime>();

  @ViewChild('top', { read: ElementRef }) tableInput!: ElementRef;

  public constructor(private animeListService: AnimeListService) {
  }

  public async ngOnInit(): Promise<void> {
    if(sessionStorage.getItem('animeList') === null) {
      sessionStorage.setItem('animeList', JSON.stringify(await lastValueFrom(this.animeListService.getAnime(0))));
    }
    this.animeList = JSON.parse(sessionStorage.getItem('animeList') || '{}');
  }

  public async handlePageEvent(e: PageEvent) : Promise<void> {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.animeList=await lastValueFrom(this.animeListService.getAnime(this.pageIndex));
    this.tableInput.nativeElement.scrollIntoView({ behavior: 'smooth', block: "end" })
  }

}
