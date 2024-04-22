import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router()
//Route for add new book
router.post("/", async (request,response) => {
    try {
        if (
            !request.body.title||
            !request.body.author||
            !request.body.publishYear
        ) {
            return response.status(400).send(
                {message: "Send all required fields: title,author,publishYear"}
            );
        }

        const newBook = {
            title:request.body.title,
            author:request.body.author,
            publishYear:request.body.publishYear
        }

        const book = await Book.create(newBook);
        return response.status(201).send(book);
        
    } catch (error) {
        console.log(error);
        response.status(500).send({message: error.message});
    }
});


//Route for get all books for database
router.get("/", async (request,response) => {
    try {
        const book = await Book.find({});

        return response.status(200).json({
            count: book.length,
            data: book
        });
    } catch (error) {
        console.log(error);
        response.status(500).send({message: error.message});
    }
})

//Route for get specific book by ID for database
router.get("/:id", async (request,response) => {
    try {
        const { id } = request.params;
        const book = await Book.findById(id);
        return response.status(200).json(book);
    } catch (error) {
        console.log(error);
        response.status(500).send({message: error.message});
    }
})

//Route for update book
router.put("/:id", async (request,response) => {
    try {
        if (
            !request.body.title||
            !request.body.author||
            !request.body.publishYear
        ) {
            return response.status(400).send(
                {message: "Send all required fields: title,author,publishYear"}
            );
        }

        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id,request.body);
        if (!result) {
            return response.status(404).json({message: "Book not Found"});
        }

        return response.status(200).send({message: "Book update successfully"});
    } catch (error) {
        console.log(error);
        response.status(500).send({message: error.message});
    }
})

//Route for delete book
router.delete("/:id", async (request,response) => {
    try {
        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({message: "Book not Found"});
        }

        return response.status(200).send({message: "Book deleted successfully"});

    } catch (error) {
        console.log(error);
        response.status(500).send({message: error.message});
    }
})

export default router;