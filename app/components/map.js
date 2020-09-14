import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class MapComponent extends Component{

   /* constructor(params){
        super(params);
    }*/

    style = 'mapbox://styles/mapbox/light-v10';
    center = [115.86, -31.95];
    zoom = 10;
    marker;

   // @action
       // mapClicked({ target: map, point }) {
           // this.send(map, point);
        //  }
    
}