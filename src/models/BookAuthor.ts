import { Model, Column, Table, ForeignKey } from 'sequelize-typescript';
import { Book } from './Book';
import { Author } from './Author';

@Table
export class BookAuthor extends Model<BookAuthor> {
  @ForeignKey(() => Book)
  @Column
  bookId!: number;

  @ForeignKey(() => Author)
  @Column
  authorId!: number;
}
