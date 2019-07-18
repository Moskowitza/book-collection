import { Router } from 'express';
import { Author } from '../models/Author';
import { BookAuthor } from '../models/BookAuthor';

export const authors = Router();

authors.post('/', async (req, res, next) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (e) {
    next(e);
  }
});

authors.post('/:id/books/:bookId', async (req, res, next) => {
  try {
    await BookAuthor.create({
      actorId: req.params.id,
      bookId: req.params.bookId,
    });
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

authors.get('', async (req, res, next) => {
  try {
    res.json(await Author.scope(req.query.scope).findAll());
  } catch (e) {
    next(e);
  }
});

authors.get('/:id', async (req, res, next) => {
  try {
    const author = await Author.scope(req.query.scope).findByPk(req.params.id);
    res.json(author);
  } catch (e) {
    next(e);
  }
});

authors.put('/:id', async (req, res, next) => {
  try {
    await Author.update(req.body, { where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});
