
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const USERNAME = "";
const PASSWORD = "";

// connect to the database
mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.larzl.mongodb.net/books`, {
  useNewUrlParser: true
});

// Create book schema
const bookSchema = new mongoose.Schema({
  author: String,
  title: String,
  book: String
})

// Create a model for bookSeries
const Book = mongoose.model('Book', bookSchema);

app.get('/', async (req, res) => {
  res.send("Hit home!");
})

// Get a specific book
app.get('/api/book/:id', async (req, res) => {
  try {
    let book = await Book.find({
      _id: req.params.id
    })
    res.send(book);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})

// Get all books
app.get('/api/book', async (req, res) => {
  try {
    let books = await Book.find();
    res.send(books);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})

app.put('/api/book/:id', async (req, res) => {
  try {
    let newBook = await Book.findOne({
      _id: req.params.id
    });
    newBook.title = req.body.title;
    newBook.author = req.body.author;
    newBook.book = req.body.story;
    newBook.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})

// Add a book
app.post('/api/book', async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    book: req.body.story
  });
  try {
    await book.save();
    res.send(book);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})

// Delete a book
app.delete('/api/book/:id', async (req, res) => {
  try {
    await Book.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})


app.listen(3030, () => console.log('Server listening on port 3030!'));
