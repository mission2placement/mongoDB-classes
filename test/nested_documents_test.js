const assert = require('assert');
const mongoose = require('mongoose');
const Album = require('../models/albums');

// Describe our tests
describe('Relational records', function(){

    beforeEach(function(done){
        // Drop the collection
        mongoose.connection.collections.albums.drop(function(){
            done();
        });
    });

    // Create tests
    it('Creates an album with sub-documents', function(done){

        var album_one = new Album({
          name: 'Porcupine Tree',
          tracks: 2,
          songs: [
            {
              title: 'Lazarus',
              artist: 'Steven Wilson'
            }
          ]
        });

        album_one.save().then(function(){
            Album.findOne({name: 'Porcupine Tree'}).then(function(record){
                assert(record.songs.length === 1);
                done();
            });
        });

    });

    it('Adds a song to an album', function(done){

        var album_one = new Album({
          name: 'Porcupine Tree',
          tracks: 2,
          songs: [
            {
              title: 'Lazarus',
              artist: 'Steven Wilson'
            }
          ]
        });

        album_one.save().then(function(){
            Album.findOne({name: 'Porcupine Tree'}).then(function(record){
                // add a song to the songs collection
                record.songs.push({title: "Trains", artist: 'Steven Wilson'})
                record.save().then(function(){
                    Album.findOne({name: 'Porcupine Tree'}).then(function(record){
                        assert(record.songs.length === 2);
                        done();
                    })
                  })
                })
              })
            })
          })
