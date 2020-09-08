import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  intl: service(),
  async beforeModel() {
    this._super(...arguments);
 
    this.intl.setLocale(['es-es']);
  }
});