import 'angular2-universal-preview/polyfills';
import {prebootComplete} from 'angular2-universal-preview';

import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {App} from './app/app';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

bootstrap(App, [
  ...ROUTER_PROVIDERS,
  ...HTTP_PROVIDERS
])
.then(bootstrapComplete);

function bootstrapComplete(){
    console.log("Bootstrap complete");
    prebootComplete;
}
