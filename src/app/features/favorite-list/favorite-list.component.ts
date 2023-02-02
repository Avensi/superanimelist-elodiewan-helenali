import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Anime} from "../../model/anime";

import {PageEvent} from "@angular/material/paginator";
import {lastValueFrom} from "rxjs";


@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent implements OnInit{
  public favoriteList:Array<Anime> = new Array<Anime>();
  @ViewChild('top', { read: ElementRef }) tableInput!: ElementRef;

  public async ngOnInit(): Promise<void> {
    this.favoriteList = JSON.parse(sessionStorage.getItem('favoriteList') || '{}');
  }




}
