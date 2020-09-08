import Route from '@ember/routing/route';

export default class CountryLayerPageRoute extends Route {
    async model(){
      return{
            style: 'sdsdsd',
            center: [23, 56],
            zoom: 10
        };

    }
}
