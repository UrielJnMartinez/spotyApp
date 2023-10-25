import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  artistList: any [] = [];
  loading: boolean;
  constructor(private spotifyAPI:SpotifyService){ 
    this.loading= false;
   }

  searchAlbum(term:string){
    console.log(term)
    this.loading = true;
    this.spotifyAPI.searchAlbum(term)
      .subscribe( (data:any) => { 
        console.log(data)
        this.artistList = data;
        this.loading = false;
      } );
  }

  getArtistById(id:string){
    this.spotifyAPI.getArtistById(id)
    .subscribe( (data:any) => {

    })
  }
}
