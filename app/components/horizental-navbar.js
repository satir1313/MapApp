import Component from '@ember/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service'; 


export default class HorizentalNavbarComponent extends Component {
    @service
    intl;
 
   @action 
    changeLanguage() { 
 
     var lang = document.getElementById('lan').value;
     this.get('intl').setLocale([lang]); 
    }
}