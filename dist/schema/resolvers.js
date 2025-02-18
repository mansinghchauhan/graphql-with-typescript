import User from "../models/userModel.js";
import Book from "../models/bookModel.js";
const resolvers = {
    Query: {
        getUsers: async () => await User.find(),
        getUser: async (_, { id }) => await User.findById(id),
        getBooks: async () => await Book.find().populate("userId"),
        getBook: async (_, { id }) => await Book.findById(id).populate("userId"),
    },
    Mutation: {
        addUser: async (_, { name, email }) => {
            const user = new User({ name, email });
            return await user.save();
        },
        addBook: async (_, { title, author, userId }) => {
            const book = new Book({ title, author, userId });
            return await book.save();
        }
    },
    User: {
        books: async (parent) => await Book.find({ userId: parent.id })
    },
    Book: {
        user: async (parent) => await User.findById(parent.userId)
    }
};
export default resolvers;
