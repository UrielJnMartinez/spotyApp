import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {

  artistDetail :any = {};
  topTracks :any = [];
  albumsList :any = [];
  constructor(private router:ActivatedRoute,private spotifyAPI:SpotifyService){

    this.router.params.subscribe( params => {
       this.getArtistById(params['id']);
       this.getTopTracksByArtist(params['id']);
       this.getAlbumsByArtist(params['id']);
      
    })

  }
  getArtistById(id: string){
    this.spotifyAPI.getArtistById(id)
    .subscribe( (data:any) => {
      console.log(data)
      this.artistDetail= data;
    })
  }

  getTopTracksByArtist(id:string){
    this.spotifyAPI.getTopTracksByArtist(id)
    .subscribe( (data:any) => {
      console.log(data)
      this.topTracks= data;
    })
  }

  getAlbumsByArtist(id : string){
    this.spotifyAPI.getAlbumesByArtist(id)
    .subscribe( (data:any) => {
      console.log(data)
      this.albumsList = data;
      
    })
  }
}
