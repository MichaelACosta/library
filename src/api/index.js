import * as books from "./books";
import * as users from "./users";

export * from "./books";
export * from "./users";

export default {
  ...books,
  ...users
};
