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

//Route.on('/').render('index')
//Route.on('/register').render('register')

Route.group(() => {
    Route.get('/register', 'RegisterController.create').as('register.create')
    Route.post('/register', 'RegisterController.store').as('register.store').validator('Register')

    Route.get('/login', 'LoginController.create').as('login.create')
    Route.post('/login', 'LoginController.store').as('login.store')
}).middleware(['guest'])



Route.get('/', async({ response }) => {
    return response.redirect('/todos')
})

Route.group(() => {
    Route.get('/', 'TodoController.index').as('todos.index')
    Route.post('/', 'TodoController.store').as('todos.store')
        .validator('StoreTodo')
    Route.get(':id/edit', 'TodoController.edit').as('todos.edit')
    Route.patch(':id', 'TodoController.update').as('todos.update')
        .validator('UpdateTodo')
    Route.delete(':id', 'TodoController.destroy').as('todos.delete')
}).prefix('todos/').middleware(['auth'])

Route.post('/logout', 'LoginController.destroy').as('logout').middleware(['auth'])