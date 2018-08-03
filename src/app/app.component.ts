import { Component }    from '@angular/core';

import { AlbumService } from './album.service';
import { Albums }       from './model/albums';

import { CONSTANTS }    from './app.constants';
import { MESSAGES }     from './app.messages';

@Component({
  selector: 'app-root',
  providers: [ AlbumService ],
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  albumPage:        Albums;
  albumNameFilter:  String;
  artistNameFilter: String;

  alert: {
    message:  String,
    type:     String
  }

  constructor(
    private albumService: AlbumService,
  ) {

  }

  searchAlbums(): void {
    
    this.albumPage = null;
    this.resetAlert();

    if (this.albumNameFilter && this.albumNameFilter.length) {
      this.albumService.getAlbums(this.albumNameFilter, this.artistNameFilter)
      .subscribe(
        albumPageWrapper => {
          this.albumPage = albumPageWrapper.albums;

          if (!this.albumPage.items || !this.albumPage.items.length){
            this.setAlert(CONSTANTS.ERROR_TYPE.INFO, MESSAGES.INFO.EMPTY_SEARCH);
          }
        },
        err => {
          this.setAlert(CONSTANTS.ERROR_TYPE.ERR, MESSAGES.ERROR.ALBUM_SEARCH);
        }
      );
    } else {
      this.setAlert(CONSTANTS.ERROR_TYPE.WARN, MESSAGES.WARNING.ALBUM_NAME_REQUIRED);
    }
  }

  setAlert (type, message): void {
    this.alert = {
      type:     type,
      message:  message
    }
  }

  resetAlert(): void {
    this.alert = null;
  }

}