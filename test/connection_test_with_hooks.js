const mongoose = require('mongoose');

// ES6 Promise
mongoose.Promise = global.Promise

// Connect to database before running test.
// Mocha gives us the hooks like before() and after() which we can use.
// Now we also need to tell that when is the connection done, so we pass the 'done' parameter to the function.
// And just after our connection string we say --- done();

before(function(done){
  mongoose.connect('mongodb://localhost/myDatabase');

  mongoose.connection.once('open', () => {
    console.log('Connection is successful. You are awesome.....')
    done();
  }).on('error', (error) => {
    console.log('Connection error:', error)
  })
})

/*
  Now our database has multiple instance of the GOT character John snow as seen in the roboMongo.
  So this can create an issue if we check for the instance of GOTChar and it will return multiple entries.
  So we are going to use another hook of mocha that helps us to remove/drop the collections after running the tests
 */

 // Drop the GOT characters collections before each test.
 beforeEach((done) => {
    // Drop collection
    mongoose.connection.collections.gotchars.drop(() => {
      done();
    }) // This is a async request
 }) // It's running before every single test. unlike before() which only run once.
