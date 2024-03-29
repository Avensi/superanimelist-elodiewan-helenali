import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AnimeListService} from "../../service/anime-list.service";
import {Anime} from "../../model/anime";
import {lastValueFrom} from "rxjs";
import {PageEvent} from "@angular/material/paginator";
import {SpinnerService} from "../../service/spinner.service";

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit {
  public pageEvent!: PageEvent;
  public length: number = 100;
  public pageSize: number = 10;
  public pageIndex: number = 0;
  public animeList: Array<Anime> = new Array<Anime>();

  @ViewChild('top', { read: ElementRef }) tableInput!: ElementRef;

  public constructor(private animeListService: AnimeListService, public spinner: SpinnerService) {
  }

  public async ngOnInit(): Promise<void> {
    this.animeList = await lastValueFrom(this.animeListService.getAnime(0));
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
