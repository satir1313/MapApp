import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MapController extends Controller {

  constructor(){
    super(...arguments);
  }

  marker = {
      type: 'FeatureCollection',
      features: [
        {
          id: 'marker1',
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [ 115.86, -31.95 ] },
          imageSrc: 'images/1.jpg'
        },
        {
          id: 'marker2',
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [ 115.80, -31.95 ] },
          imageSrc: 'images/1.jpg'
        },
        {
          id: 'marker3',
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [ 115.90, -31.95 ] },
          imageSrc: 'images/1.jpg'
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

    
    
   @tracked pointChecked = false;
   @tracked imageChecked = false;

   @action
   checkPointBox(){
        if(this.pointChecked == false){this.pointChecked = true;}else{this.pointChecked = false;}
        console.log(this.pointChecked);
   }

   @action
   checkImageBox(param,ev){
      this.imageChecked = !this.imageChecked;
      console.log(this.imageChecked);
   }


   checkPointboxValidation(){
    return this.pointChecked;
   }

   checkImageboxValidation(){
    return this.imageChecked;
   }

  }
