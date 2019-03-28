const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Create Schema and Model
  We are creating an example for relational Database.
  Let's take an example of Album which has multiple songs.
  Our Schema is going to be defined as:
        Album {
          name: 'Name of the album',
          tracks: 'Number of tracks in the Album',
          songs: [{
            title: 'Song title',
            artist: 'artist name'
          },
          {
            title: 'Song title',
            artist: 'artist name'
          }
        ]
      }

    The above schema has 2 models:
      1: Album schema
      2: Song schema
    We can nest the song schema inside the Album schema.
 */


const SongListSchema = new Schema({
  title: String,
  artist: String
});

const AlbumSchema = new Schema({
  name: String,
  tracks: Number,
  songs: [SongListSchema]
});

const Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
