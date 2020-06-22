'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')


//User routes
Route.group(() => {
  Route.get('users', "UserController.index");
  Route.get('user/:id', "UserController.show");
  Route.post('user', "UserController.store");
  Route
  .post('login', 'UserController.login')
  .middleware('guest');
  Route
  .get('users/:id', 'UserController.show')
  .middleware('auth');
}).prefix('api');


//For all payement route
Route.group(() => {
  Route.get('test', "PayementController.index");
  Route.post('test', "PayementController.store");

}).prefix('api');
