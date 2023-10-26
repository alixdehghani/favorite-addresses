// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'angular-sing-up-85a5f',
    appId: '1:158805215307:web:6e516f9993a4f92184e5ce',
    storageBucket: 'angular-sing-up-85a5f.appspot.com',
    apiKey: 'AIzaSyANOYaUfLbjE3iDatbkNCmGJrxqfxTSL00',
    authDomain: 'angular-sing-up-85a5f.firebaseapp.com',
    messagingSenderId: '158805215307',
  },
  production: false,
  baseUrl: 'http://localhost:3000',
  searchGeocodingUrl: 'https://nominatim.openstreetmap.org/search',
  reverseGeocodingUrl: 'https://nominatim.openstreetmap.org/reverse'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
