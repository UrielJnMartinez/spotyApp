import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  albumesList: any [] = [];
  loading: boolean;

  constructor ( private spotifyAPI:SpotifyService){
    this.loading=true;
    this.spotifyAPI.getNewReleases()
      .subscribe( (data: any) => {
        console.log(data)
        this.albumesList = data;
        this.loading=false;
      });
  }

  
}
