
exports.up = function(knex, Promise) {
  


return knex.schema.createTable('ppl', (table) => {

table.increments();
table.text('nama');
table.text('ket');
});

};



exports.down = function(knex, Promise) {
  
return knex.schema.dropTable('ppl');
};
