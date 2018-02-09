const knex = require('./knex');// the connection



module.exports = {

  getAll(){
   return knex('ppl');
  },
  getOne(id) {
    return knex('ppl').where('id', id).first();
  },
  create(ppl) {
    return knex('ppl').insert(ppl, '*');
  },
  update(id, ppl) {
    return knex('ppl').where('id', id).update(ppl, '*');
  },
  delete(id) {
    return knex('ppl').where('id', id).del();
  }

}