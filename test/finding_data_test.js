// const mocha = require('mocha');
const assert = require('assert');
const GOTChar = require('../models/GOTChar');

describe('Finding records', function(){

  beforeEach(function(done){
    var char = new GOTChar({
      name: 'John Snow'
    })
    char.save().then(function(){
      done();
    })
  })

  // Create tests
  it('it finds one record from the database', function(done){
      GOTChar.findOne({ name: 'John Snow'}).then(function(result){
        assert( result.name === 'John Snow');
        done();
      })
  })
})
