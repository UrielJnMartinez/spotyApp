import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

//providedIn: 'root'
@Injectable()
export class SpotifyService {
  token: string = 'BQA8ergHuXHXcczROKNXcTpP4YuVOt9aWI4DmoxoxgxigKY-96E3fmFFNwTAhxxKLj-mmXEQa_kcPJ6HAboIMKrumwBWJHN93ekT7m-z_pAoJXWc5iU';
  constructor(private http: HttpClient) { 
    
  }

  getQuery(query:string){

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
     const url = `https://api.spotify.com/v1/${query}`
    return this.http.get(url,{ headers});//observable
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases')
          .pipe( map( (data : any) => { 
            return data['albums'].items;
          }));
  }

  searchAlbum(term:string){
    //%2Ctrack
    return this.getQuery(`search?q=${term}&type=artist&limit=10`)
          .pipe( map( (data : any) => { 
            return data['artists'].items;
          }));
  }

  getArtistById(id:string){
    
    return this.getQuery(`artists/${id}`)
          .pipe( map( (data : any) => { 
            return data;
          }));
    
    
  }

  getTopTracksByArtist( id: string){
    return this.getQuery(`artists/${id}/top-tracks?market=es`)
          .pipe( map( (data : any) => { 
            return data['tracks'];
          }));
  }

  getTracksByAlbumId(id:string){
    return this.getQuery(`albums/${id}/tracks`)
          .pipe( map( (data : any) => { 
            return data;
          }));
  }

  getAlbumesByArtist(idArtist : string){
    return this.getQuery(`artists/${idArtist}/albums`)
          .pipe( map( (data : any) => { 
            console.log('album',data)
            return data['items'];
          }));
  }

}
