import React, { useEffect, useState } from "react";

const Book = {
  title: String,
  description: String,
};

const BookInfo = {
  id: Number,
  count: Number,
};

export const BookComponent = () => {
  const [books, setBooks] =
    useState < Book > { title: "sujon", description: "asdlj" };
  const [info, setInfo] = useState < BookInfo > { id: 1, count: 0 };

  const getBooks = async () => {
    const { count, data } = await getBooks(books);
    setInfo({ ...info, count: count });
    setBooks(data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <h2>{books[0].title}</h2>
      <p>{books[0].description}</p>
    </>
  );
};
