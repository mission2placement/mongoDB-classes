const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model

const GOTCharSchema = new Schema({
  name: String,
  house: String, // If we create a character without this house it will create it without house property.
  age: Number    // If we create a character without age it will create it without age property. But when we pass a age it will be number.
});

// Now we create our model where the collection is going to get the value.

// We pass the arguments to the model method.
// 1st argument -- The name of the model
// 2nd argument -- The schema for the model.
const GOTChar = mongoose.model('GOTChar', GOTCharSchema);

module.exports = GOTChar;
