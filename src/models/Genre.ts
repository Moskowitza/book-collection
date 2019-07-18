import {
  BelongsToMany,
  Column,
  CreatedAt,
  Model,
  PrimaryKey,
  Scopes,
  Table,
  UpdatedAt,
} from "sequelize-typescript";
import { Book } from "./Book";

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
export class Genre extends Model<Genre> {
  @PrimaryKey
  @Column
  public name!: string;

  @BelongsToMany(() => Book, () => Book)
  public movies?: Book[];

  @CreatedAt
  @Column
  public createdAt!: Date;

  @UpdatedAt
  @Column
  public updatedAt!: Date;
}
