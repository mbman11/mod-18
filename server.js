const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 3001;

const connectionStringURI = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(connectionStringURI);

let db;

const dbName = 'socialMediaDB';

client.connect()
  .then(() => {
    console.log('Connected successfully to MongoDB');
    // Use client.db() constructor to add new db instance
    db = client.db(dbName);

    // start up express server
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error: ', err.message);
  });

  app.use(express.json());



  app.post('/create', (req, res) => {
    // Use db connection to add a document
    db.collection('userCollection').insertOne(
      { userName: req.body.userName, email: req.body.email }
    )
      .then(results => res.json(results))
      .catch(err => {
        if (err) throw err;
      });
  });
  
  app.get('/read', (req, res) => {
    // Use db connection to find all documents in collection
    db.collection('userCollection')
      .find()
      .toArray()
      .then(results => res.json(results))
      .catch(err => {
        if (err) throw err;
      });
  });

  // To delete a document, we need to convert the string id in body to an ObjectId
app.delete('/delete', (req, res) => {
  // Wrap the id in the ObjectId class to instantiate a new instance
  const userId = new ObjectId(req.body.id);

  // Use deleteOne() to delete one object
  db.collection('userCollection').deleteOne(
    // This is the filter. We delete only the document that matches the _id provided in the request body.
    { _id: userId }
  )
    .then(results => {
      console.log(results);
      res.send(
        results.deletedCount ? 'Document deleted' : 'No document found!'
      );
    })
    .catch(err => {
      if (err) throw err;
    });
});



