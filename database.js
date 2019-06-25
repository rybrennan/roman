const mongoose = require("mongoose");
// const faker = require("faker");
mongoose
  .connect("mongodb://localhost/roman")
  .then(() => {
    console.log("db connected");
  })
  .catch(err => {
    console.log("connection error", err);
  });



let ReviewSchema = mongoose.Schema;

const reviewServiceSchema = new ReviewSchema({
  id: Number,
  avatar: String,
  reviewer: String,
  stars: Number,
  date: String,
  body: String
});

let Review = mongoose.model("Review", reviewServiceSchema);

let BookSchema = mongoose.Schema;

const bookSchema = new BookSchema({
  id: Number,
  book: String,
  author: String
});

const Book = mongoose.model("Book", bookSchema);



let save = (records, cb) => {
  //only putting a callback here bc you will eventually be saving
  //a bunch of records and need it to be async
  console.log("save running");

  records.forEach((record) => {
    console.log('i am the record', record)
    new Review({
      id: record.id,
      avatar: record.avatar,
      reviewer: record.reviewer,
      stars: record.stars,
      date: record.date,
      body: record.body
    })
    .save().catch((err) => {
      console.log('Error saving to the DB', err)
    })
  })
  cb();
};

module.exports.save = save;


