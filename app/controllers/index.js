import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class MapController extends Controller {
    marker = {
        type: 'FeatureCollection',
        features: [
          {
            id: 'marker1',
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [ 115.86, -31.95 ] }
          },
          {
            id: 'marker2',
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [ 115.80, -31.95 ] }
          },
          {
            id: 'marker3',
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [ 115.90, -31.95 ] }
          }
        ]
      };
    

      @action 
        mapClicked() {

            this.marker.features.forEach(element => {
                //element.setLngLat(element.features.coordinates);
                console.log( element.type);
            });
        }

}