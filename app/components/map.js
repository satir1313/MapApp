import Component from '@glimmer/component';
import { action } from '@ember/object';
import { NavigationControl } from 'mapbox-gl';
import { GeolocateControl } from 'mapbox-gl';
import { MapboxOptions } from 'mapbox-gl';
import { tracked } from '@glimmer/tracking';

export default class MapComponent extends Component{

    constructor(){
        super(...arguments);
    }
    
    style = this.args.style;
    center = this.args.center;
    zoom = this.args.zoom;

    get navigationControl() {
        return new NavigationControl({
            showCompass: true,
            showZoom: true
        });
    }

    get geoLocate(){
        return new GeolocateControl({
            positionOptions: {
            enableHighAccuracy: true
            },
            trackUserLocation: true
        });
    }


    @action
    mouseEnter(){
        console.log("mouse entered!");
    }
    
    
   @action
   mouseLeave(ev){
      console.log("mouse left!");
   }

    @action
    doubleClick(){
        console.log("mouse Double Clicked!");
    }

    
   @action
   rightClick(){  
       console.log("right Click activated");
   }

}