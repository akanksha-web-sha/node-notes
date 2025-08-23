
```js
1. show dbs 

=> list all the available databases

2. use database_name 

=> switch to a particular database or create a new one if it does not exists

3. db.collection.insertOne({name: "something"}) 

=> inserts a document in the collectionName collection of the currently active database

4. db.collectionName.find():

    To list all the documents of a particular collection in the form of an array.
5. db.collection.findOne({email: "something@gmail.com"})

    => Finds and list a matching document based on the given criteria

6. db.users.insertMany([{name: "abcd"}, {name: "lovish", _id: 90}])

 => inserts two documents, you can insert as many as you want.
```