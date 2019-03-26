// const mocha = require('mocha');
const assert = require('assert');
const GOTChar = require('../models/GOTChar');

describe('Deleting records', function(){
  var char;
  beforeEach(function(done){
    char = new GOTChar({
      name: 'Jon Snow'
    })
    char.save().then(function(){
      done();
    })
  })

  // delete tests
  it('it deletes one record from the database', function(done){
      GOTChar.findOneAndDelete({name: 'Jon Snow'}).then(function(){
        GOTChar.findOne({name: 'Jon Snow'}).then(function(result){
          assert( result === null)
          done();
        })
      })
    })
  })
