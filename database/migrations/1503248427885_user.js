'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    try {
      this.create('users', (collection) => {
        console.log(collection)
        collection.increments()
        collection.string('username', 80).notNullable().unique()
        collection.string('email', 254).notNullable().unique()
        collection.string('password', 60).notNullable()
        collection.timestamps()
      })
    } catch (error) {
      console.log("Une erreur s'est produite");
    }

  }

  down () {

    this.drop('users')
  }
}

module.exports = UserSchema
