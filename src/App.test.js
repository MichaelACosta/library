import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { wrapComponent, makeStore } from "./utils";

it("renders without crashing", () => {
  const store = makeStore({
    library: {
      stateBooks: {
        books: [
          {
            isbn: "978-85-7799-518-9",
            title: "Dom Casmurro",
            autor: "Machado de Assis",
            purchaseDate: 2019,
            editDate: 2019,
            status: "read"
          }
        ]
      }
    }
  });
  const div = document.createElement("div");
  ReactDOM.render(wrapComponent(<App />, store), div);
  ReactDOM.unmountComponentAtNode(div);
});
