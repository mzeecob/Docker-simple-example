var express = require('express');
var router = express.Router();
var mysql= require('./mysql');


// get data from database
async function findAll(){
    const result = await mysql.query("SELECT * FROM book");
    return result[0];
}

// landing page *GET*
router.get('/', async function(req, res) {
    const books = await findAll();
    res.render('index', {'books': books});
});

// landing page *POST*
router.post('/', async (req, res) => {
   
    let book = await req.body;
    var title = book.title;
    var author = book.author;
    var quantity = book.quantity;

    var sql = "INSERT INTO book (title, author, quantity) VALUES " +
          "('" + title + "','" + author + "','" + quantity + "')";

    mysql.query(sql, function(err, result) {
        if (err) {
          return console.error(err.message);
        }
    });
    
    res.redirect('/');
});



module.exports = router;

