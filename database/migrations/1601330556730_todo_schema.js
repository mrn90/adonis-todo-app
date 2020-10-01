'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TodoSchema extends Schema {
  up () {
    this.create('todos', (table) => {
      table.increments()
      table.integer('user_id')
      table.string('title').notNullable()
      table.string('completed').default(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('todos')
  }
}

module.exports = TodoSchema
