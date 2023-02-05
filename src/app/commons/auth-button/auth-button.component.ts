import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Auth} from "../../service/auth";
import {AnimeReaction} from "../../model/anime-reaction";


@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss']
})
export class AuthButtonComponent implements OnInit{

  @Input() isLoggedIn : boolean = this.authService.isLoggedIn;
  @Output() selectedChange = new EventEmitter<boolean>();

  public constructor(private authService: Auth) {}

  public async ngOnInit(): Promise<void> {
    this.authService.statut.subscribe((value:boolean) => {
      this.isLoggedIn = this.authService.statut.value;
    })
  }

  public toggleLogin() : void {
    this.isLoggedIn =! this.authService.isLoggedIn;
    if(this.isLoggedIn){
      this.authService.logIn();
    }else{
      this.authService.logOut();
    }
    this.selectedChange.emit(this.isLoggedIn);
  }


}
