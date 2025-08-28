# 1. Show All Databases collections
```js
show dbs
show collections
```
- Lists all available databases.

# 2. Switch or Create a Database
```js
use database_name
```

- Switches to a specific database.
- Creates it if it doesn't exist.

# 📄 Collection & Document Operations
## 3. Insert a Single Document
```js
db.collection.insertOne({ name: "something" })
```
- Inserts one document into the specified collection.

## 4. Insert Multiple Documents
```js
db.users.insertMany([
  { name: "abcd" },
  { name: "lovish", _id: 90 }
])

```
- Inserts multiple documents into the users collection.

# 🔍 Read (Query) Operations
## 5. Find All Documents in a Collection
```js
db.collectionName.find()  
```

- Returns all documents in an array format.

## 6. Find One Document by Field
```js
db.collection.findOne({ email: "something@gmail.com" })
```
- Returns the first document matching the query.

# ✏️ Update Operations
## 7. Update a Single Document
```js
db.collection.updateOne({ price: 500 }, { $set: { rating: 5 } })
```
- Sets the rating field to 5 for the first document where price is 500.

## 8. Update Multiple Documents
```js
db.collection.updateMany({ price: 500 }, { $set: { rating: 5 } })
```
- Updates rating to 5 for all documents where price is 500.

# 🗑️ Delete Operations
## 9. Delete a Single Document
```js
db.collection.deleteOne({ price: 500 })
```
- Deletes the first document with price equal to 500.

## 10. Delete Multiple Documents
```js
db.collection.deleteMany({ price: 500 })
```

- Deletes all documents with price equal to 500.

# ⚙️ Query Operators
## 11. Logical and Comparison Operators
```js
db.users.find({
  $and: [
    { age: { $gt: 25 } },
    { numberOfFriends: { $lt: 30 } }
  ]
})
```
### Operator Reference

| Operator | Description               |
|----------|---------------------------|
| `$lt`    | Less than                 |
| `$gt`    | Greater than              |
| `$lte`   | Less than or equal to     |
| `$gte`   | Greater than or equal to  |
| `$eq`    | Equal to                  |
| `$ne`    | Not equal to              |
| `$and`   | Logical AND               |
| `$or`    | Logical OR                |
