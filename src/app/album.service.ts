import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { CONSTANTS } from './app.constants';
import { AlbumPageWrapper } from './model/album-page-wrapper';

@Injectable()
export class AlbumService {

  constructor(private http: HttpClient) { }

  getAlbums (albumName, artistName): Observable<AlbumPageWrapper> {

    var url = CONSTANTS.URL_BASE + 'album/search?';
    
    url += 'albumName=' + albumName;
    url += (artistName ? '&artistName=' + artistName : '');

    return this.http.get<AlbumPageWrapper>(
      url
    );
  }

}