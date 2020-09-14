import Route from '@ember/routing/route';

export default class CountryLayerPageRoute extends Route {
    async model(){
      return{
            style: 'mapbox://sprites/mapbox/streets-v8', 
            center: [116.8447, -20.7337], 
            zoom: 7 
        };

    }
}