// /*
//   We use mongoose because it provides different methods to interact with mongoDb.
//   mongoose need to know that we have a mongoDb running in the background.
//   To connect to the database we require mongoose.
//       npm install mongoose --save
// */
//
// const mongoose = require('mongoose');
//
// /*
//   We now connect to mongoDB. we use mongoose.connect().
//   connect() method takes in the mongodb://<host>/<databaseName>
//     -- mongodb is running locally so we will give host as localhost
//     -- mongodb takes the database name and connect it to that database if it exist.
//        If it doesn't exist it will create a database with the given name. i.e myDatabase
// */
//
// // ES6 Promise
// mongoose.Promise = global.Promise
//
// // mongoose.connect('mongodb://localhost/myDatabase');
//
// /*
//   We will check if the connection is successful or not.
//   To check the connection we will use .once() event which fires once the connection is open.
//   We can check error in connection by firing .on('error', callback). -- this will fire everytime there is an error.
// */
//
// // mongoose.connection.once('open', () => {
// //   console.log('Connection is successful. You are awesome.....')
// // }).on('error', (error) => {
// //   console.log('Connection error:', error)
// // })
//
// // Connect to database before running test.
// // Mocha gives us the hooks like before() and after() which we can use.
//
// before(function(done){
//   mongoose.connect('mongodb://localhost/myDatabase');
//
//   mongoose.connection.once('open', () => {
//     console.log('Connection is successful. You are awesome.....')
//     done();
//   }).on('error', (error) => {
//     console.log('Connection error:', error)
//   })
// })
