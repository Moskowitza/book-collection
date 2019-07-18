import {
  BelongsToMany,
  Column,
  CreatedAt,
  Model,
  Scopes,
  Table,
  UpdatedAt,
} from "sequelize-typescript";
import { Book } from "./Book";
import { BookAuthor } from "./BookAuthor";

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
  public firstName!: string;

  @Column
  public lastName!: string;

  @Column
  public birthday?: Date;

  @BelongsToMany(() => Book, () => BookAuthor)
  public books?: Book[];

  @CreatedAt
  @Column
  public createdAt!: Date;

  @UpdatedAt
  @Column
  public updatedAt!: Date;
}
