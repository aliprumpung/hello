
exports.seed = function(knex, Promise) {
 
 // Deletes ALL existing entries
  
return knex('ppl').del()
    
.then(function () {
       
const warga = [
{nama: 'nuri', ket: 'adiknya unay'},
{nama: 'yosi', ket: 'adiknya ooi'},
{nama: 'dani', ket: 'temennya coki'},
{nama: 'ooi', ket: 'abangnya yosi'},
{nama: 'unay', ket: 'abangnya unay'}
];
    
return knex('ppl').insert(warga);
});

};
