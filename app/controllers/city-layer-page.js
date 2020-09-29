import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CountryLayerPageController extends Controller {

    
  style = 'mapbox://styles/mapbox/streets-v10';
  center = [115.86, -31.95];
  zoom = 12;
  sourceType='vector';
  layerType='line';
  sourceLayer='contour';
  url= "mapbox://mapbox.mapbox-terrain-v2";
  layout={
    linejoin: 'round',
    linecap : 'round'
  };
  paint= {
    linecolor: '#ff69b4',
    linewidth: 1
  };

  @tracked contourButtonClicked = false;

  @action
  satAdd(){
      this.contourButtonClicked = !this.contourButtonClicked;
  }
  
  @tracked
  marker = {
      type: 'FeatureCollection',
      features: [
        {
          id: 'marker1',
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [ 115.86, -31.95 ] },
          imageSrc: 'images/1.jpg',
          desc:'first image'
        },
        {
          id: 'marker2',
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [ 115.80, -31.95 ] },
          imageSrc: 'images/1.jpg',
          desc:'second image'
        },
        {
          id: 'marker3',
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [ 115.90, -31.95 ] },
          imageSrc: 'images/1.jpg',
          desc:'third image'
        }
      ]
    };

  @action 
  mapClicked(ev) {
    let lati = (ev.lngLat.lat);
    let leng = (ev.lngLat.lng);
    let coord = [ leng, lati ];

   this.marker = {
    type: 'FeatureCollection',
    features: [
      {
        id: 'marker4',
        type: 'Feature',
        geometry: { type: 'Point', coordinates: coord},
        imageSrc: 'images/1.jpg',
        desc:'forth image'
      }
     ]};

    console.log(coord);
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
   console.log("false is checked");
  return this.pointChecked;
 }

 checkImageboxValidation(){
  return this.imageChecked;
 }

}
