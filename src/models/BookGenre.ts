import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Book } from "./Book";
import { Genre } from "./Genre";

@Table
export class BookGenre extends Model<BookGenre> {
  @ForeignKey(() => Book)
  @Column
  public bookId!: number;

  @ForeignKey(() => Genre)
  @Column
  public genre!: string;
}
