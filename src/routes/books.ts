import { Router } from "express";
import { Book } from "../models/Book";

export const books = Router();

books.post("/", async (req, res, next) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (e) {
    next(e);
  }
});

books.get("", async (req, res, next) => {
  try {
    res.json(await Book.scope(req.query.scope).findAll());
  } catch (e) {
    next(e);
  }
});

books.get("/:id", async (req, res, next) => {
  try {
    const book = await Book.scope(req.query.scope).findByPk(
      req.params.id
    );
    res.json(book);
  } catch (e) {
    next(e);
  }
});

books.put("/:id", async (req, res, next) => {
  try {
    await Book.update<Book>(req.body, { where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});
