import {
  Model,
  Column,
  Table,
  BelongsToMany,
  Scopes,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import { Book } from './Book';
import { BookAuthor } from './BookAuthor';

@Scopes(() => ({
  books: {
    include: [
      {
        model: Book,
        through: { attributes: [] },
      },
    ],
  },
}))
@Table
export class Author extends Model<Author> {
  @Column
  firstName!: string;

  @Column
  lastName!: string;

  @Column
  birthday?: Date;

  @BelongsToMany(() => Book, () => BookAuthor)
  books?: Book[];

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
