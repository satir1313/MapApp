import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MapComponent extends Component{

    constructor(){
        super(...arguments);
    }
    

    style = this.args.style;
    center = this.args.center;
    zoom = this.args.zoom;

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