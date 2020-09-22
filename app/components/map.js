import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MapComponent extends Component{

    constructor(){
        super(...arguments);
    }
    

    style = 'mapbox://styles/mapbox/light-v10';
    center = [115.86, -31.95];
    zoom = 11;
    marker;

    @action
    mouseEnter(){
        console.log("mouse entered!");
    }

    @action
    mouseLeave(){
        console.log("mouse left!");
    }
    
    @action
    doubleClick(){
        console.log("mouse Double Clicked!");
    }

}