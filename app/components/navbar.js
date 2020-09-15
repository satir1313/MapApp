import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MapComponent extends Component{

    constructor(){
        super(...arguments);
    }

    
   @tracked pointChecked = true;
   @tracked imageChecked = false;

}