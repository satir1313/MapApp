import Route from '@ember/routing/route';

export default class CountryLayerPageRoute extends Route {
    async model(){
      return{
            style: 'mapbox://styles/mapbox/streets-v11', 
            center: [-3.7068, 40.4168], 
            zoom: 7 
        };

    }
}
