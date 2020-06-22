'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PayementSchema extends Schema {
  up () {
    this.create('payements', (collection) => {
      collection.increments()
      collection.timestamps()
    })
  }

  down () {
    this.drop('payements')
  }
}

module.exports = PayementSchema
