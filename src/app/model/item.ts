import { Artist }       from './artist';
import { ExternalUrls } from './external-urls';
import { Image }        from './image';

export class Item {

    albumType:              String;
    artists:                Artist[];
    availableMarkets:       String[];
    externalUrls:           ExternalUrls;
    href:                   String;
    id:                     String;
    images:                 Image;
    name:                   String;
    releaseDate:            String;
    releaseDatePrecision:   String;
    type:                   String;
    uri:                    String;

}