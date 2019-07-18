import { Model, Column, Table, ForeignKey } from 'sequelize-typescript';
import { Book } from './Book';
import { Genre } from './Genre';

@Table
export class BookGenre extends Model<BookGenre> {
  @ForeignKey(() => Book)
  @Column
  bookId!: number;

  @ForeignKey(() => Genre)
  @Column
  genre!: string;
}
