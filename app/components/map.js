import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class MapComponent extends Component{

    constructor(){
        super(...arguments);
    }
    
    style = 'mapbox://styles/mapbox/light-v10';
    center = [115.86, -31.95];
    zoom = 10;
    marker;

    

}