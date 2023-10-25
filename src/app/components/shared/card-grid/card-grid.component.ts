import { Component, Input } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css']
})
export class CardGridComponent {

  @Input() itemsList: any[] = [];

  constructor( private router: Router){}

  getArtistById(id: string){
   
     this.router.navigate(['/artist', id]);
  }

  getAlbumById(id: string){
    console.log(id);
    this.router.navigate(['/album', id]);
    // this.router.navigate([['/atrist',id]])
    
  }
}
