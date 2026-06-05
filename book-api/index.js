const express = require("express");
const app = express();
app.use(express.json());

let books = [
    {
        id:1,
        title:"Harry Potter",
        author:"jk rowling"
    }
];

app.get("/books", (req, res) => {
    res.json(books);
});

app.post("/books", (req, res) => {
    const newbook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(newbook);
    res.status(201).json(newbook);
});

app.delete("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    books = books.filter(book => book.id !== id);
    res.json({
        message: "book deleted"
    });
});

app.put("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);
    if(!book){
        return res.status(404).json({
            message: "book not found"
        });
    }

    book.title = req.body.title;
    book.author = req.body.author;
    res.json(book);
})

app.listen(3000, () =>{
    console.log("server running on port 3000");
})