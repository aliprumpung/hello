const express = require('express');

const router = express.Router();

const queries = require('../db/queries');



function isValidId(req, res, next) {
  if(!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}


function validppl(ppl) {
  const hasnama = typeof ppl.nama == 'string' && ppl.nama.trim() != '';
  const hasket = typeof ppl.ket == 'string' && ppl.ket.trim() != '';
 
  return hasnama && hasket
}

router.get('/',(req, res) => {
queries.getAll().then(ppl => {
res.json(ppl);
  });
});

router.get('/:id', isValidId, (req, res, next) => {
  queries.getOne(req.params.id).then(ppl => {
    if(ppl) {
      res.json(ppl);
    } else {
      next();
    }
  });
});

router.post('/', (req, res, next) => {
  if(validppl(req.body)) {
    queries.create(req.body).then(ppl => {
      res.json(ppl[0]);
    });
  } else {
    next(new Error('Invalid id'));
  }
});

router.put('/:id', isValidId, (req, res, next) => {
  if(validppl(req.body)) {
    queries.update(req.params.id, req.body).then(ppl => {
      res.json(ppl[0]);
    });
  } else {
    next(new Error('Invalid ppl'));
  }
});

router.delete('/:id', isValidId, (req, res) => {
  queries.delete(req.params.id).then(() => {
    res.json({
      deleted: true
    });
  });
});
module.exports = router;