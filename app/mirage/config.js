export default function() {

 this.namespace = 'api';


 this.get('/appointments');
 this.get('/appointments/:id');
this.post('/appointments');
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
