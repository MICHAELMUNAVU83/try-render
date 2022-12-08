import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/books")
      .then((res) => res.json())
      .then((books) => setBooks(books));
  }, []);

  const showBooks = books.map((book) => (
    <div key={book.id}>
      <h3>{book.name}</h3>
    </div>
  ));

  return <div className="App">{showBooks}</div>;
}

export default App;
