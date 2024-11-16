const database = 'MyFriends';
const collection = 'new_collection';

// The current database to use.
use(database);

db.new_collection.updateOne(
    { "name": "Anne" },
    { "$set": { "phone": 9700785600 } }
  )
  