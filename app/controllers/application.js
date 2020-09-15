import Controller from '@ember/controller'; 
import { inject as service } from '@ember/service'; 
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

let pointOptionChecked = false;
let imgOptionChecked = false;

export default Controller.extend({ 
  intl: service(),
  actions: { 
   changeLanguage: function() { 
    var lang = document.getElementById('lan').value;
    this.get('intl').setLocale([lang]); 
   },
  
 } 
});