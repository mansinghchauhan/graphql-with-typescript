import User, { IUser } from "../models/userModel.js";
import Book, { IBook } from "../models/bookModel.js";

const resolvers = {
  Query: {
    getUsers: async (): Promise<IUser[]> => await User.find(),
    getUser: async (_: any, { id }: { id: string }): Promise<IUser | null> => await User.findById(id),
    getBooks: async (): Promise<IBook[]> => await Book.find().populate("userId"),
    getBook: async (_: any, { id }: { id: string }): Promise<IBook | null> => await Book.findById(id).populate("userId"),
  },
  Mutation: {
    addUser: async (_: any, { name, email }: { name: string; email: string }): Promise<IUser> => {
      const user = new User({ name, email });
      return await user.save();
    },
    addBook: async (_: any, { title, author, userId }: { title: string; author: string; userId: string }): Promise<IBook> => {
      const book = new Book({ title, author, userId });
      return await book.save();
    }
  },
  User: {
    books: async (parent: IUser) => await Book.find({ userId: parent.id })
  },
  Book: {
    user: async (parent: IBook) => await User.findById(parent.userId)
  }
};

export default resolvers;
