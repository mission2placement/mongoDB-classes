// const mocha = require('mocha');
const assert = require('assert');
const GOTChar = require('../models/GOTChar');

describe('Updating records', function(){
  var char;
  beforeEach(function(done){
    char = new GOTChar({
      name: 'Jon Snow',
      age: 12
    })
    char.save().then(function(){
      done();
    })
  })

  // update tests
  it('it updates one record in the database', function(done){
      GOTChar.findOneAndUpdate({name: 'Jon Snow'}, {name: 'Bran Stark'}, {useFindAndModify: false}).then(function(){
        GOTChar.findById({_id: char._id}).then(function(result){
          assert(result.name === 'Bran Stark')
          done();
        })
      })
    })

  // Using the update operator
  it('it increments the age by 1', function(done){
      GOTChar.updateMany({}, {$inc: { age: 1 }}).then(function(){
        GOTChar.findOne({name: 'Jon Snow'}).then(function(record){
          assert(record.age === 13 )
          done();
        })
      })
    })
  })
