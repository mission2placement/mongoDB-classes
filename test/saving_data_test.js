// const mocha = require('mocha');
const assert = require('assert');
const GOTChar = require('../models/GOTChar');

describe('Saving records', function(){
  it('it saves a record to the database', function(done){
    var char = new GOTChar({   // We are creating an instance of the GOTChar as we exported that from our models
      name: 'John Snow'        // We are using the model to just give a name for a character.
    })
    /*
      -- Since char is an instance of mongoose.model we can use the methods of model.
      -- One such method is save() -- it saves directly to the collections we are using.
      -- In this case mongoose will know that the char is instance of GOTChar model and it will save the data to the
      -- Schema (GOTCharSchema) we have created for our collections.

      -- char.save() is an async function so if we assert like this:
            char.save();
            assert(<our assertion condition>)
      -- it might show failed even if the result is being saved.
      -- The reason being the async save() method will send a promise function and the code will move to next line.
      -- Therefore, we use .then() on the save() and inside then() we write a function which assert.
      -- isNew is a property provided by the model to check if the entry is new or not.

      -- mocha needs to know when the test is over.
      -- So we have to pass a 'done' to our it
                  ex: it('it saves a record to the database', function(done){})
        so that it understand when the test is ending.
      -- we use done() when we want end the test
    */
    char.save().then(function(){
      assert(char.isNew === false)
      done();
    })
  })
})
