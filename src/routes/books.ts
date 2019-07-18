import { Router } from 'express';
import { Book } from '../models/Book';

export const books = Router();

books.post('/', async (req, res, next) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (e) {
    next(e);
  }
});

books.get('', async (req, res, next) => {
  try {
    res.json(await Movie.scope(req.query['scope']).findAll());
  } catch (e) {
    next(e);
  }
});

books.get('/:id', async (req, res, next) => {
  try {
    const movie = await Movie.scope(req.query['scope']).findByPk(
      req.params['id']
    );
    res.json(movie);
  } catch (e) {
    next(e);
  }
});

books.put('/:id', async (req, res, next) => {
  try {
    await Movie.update<Movie>(req.body, { where: { id: req.params['id'] } });
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});
