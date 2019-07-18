import {
  BelongsToMany,
  Column,
  CreatedAt,
  HasOne,
  Model,
  Scopes,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Author } from './Author';
import { Genre } from './Genre';
import { BookAuthor } from './BookAuthor';
import { BookGenre } from './BookGenre';

@Scopes(() => ({
  Author: {
    include: [
      {
        model: Author,
        through: { attributes: [] },
      },
    ],
  },
  genre: {
    include: [
      {
        model: Genre,
        through: { attributes: [] },
      },
    ],
  },
  full: {
    include: [
      {
        model: Author,
        through: { attributes: [] },
      },
      {
        model: Genre,
        through: { attributes: [] },
      },
    ],
  },
}))
@Table
export class Book extends Model<Book> {
  @Column
  public title!: string;

  @Column
  public year!: number;

  @BelongsToMany(() => Author, () => BookAuthor)
  public cast?: Author[];

  @BelongsToMany(() => Genre, () => BookGenre)
  public genres?: Genre[];

  @CreatedAt
  @Column
  public createdAt!: Date;

  @UpdatedAt
  @Column
  public updatedAt!: Date;
}
