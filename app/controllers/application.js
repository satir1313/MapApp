import Controller from '@ember/controller'; 
import { inject as service } from '@ember/service'; 

export default Controller.extend({ 
  intl: service(),
  actions: { 
   changeLanguage: function() { 
    var lang = $("#lan").val(); 
    this.get('intl').setLocale([lang]); 
   } 
 } 
});