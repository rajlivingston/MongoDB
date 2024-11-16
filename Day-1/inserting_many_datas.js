/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'MyFriends';
const collection = 'new_collection';

// The current database to use.
use(database);

db.collection_name.insertMany([
    { "name": "Johan", "phone": 9875462554},
    { "name": "Anne", "phone": 8845962525},
])



