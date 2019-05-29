import { Record } from "immutable";

const book = {
  isbn: "978-85-7799-518-9",
  title: "Dom Casmurro",
  autor: "Machado de Assis",
  purchaseDate: 2019,
  editDate: 2019,
  status: "read"
};

const Model = Record({
  books: [book]
});

export default Model;
