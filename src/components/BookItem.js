import React from 'react';
import { useDispatch } from 'react-redux';
import { bookActions } from '../store/index';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();

  const onRemoveBookHandler = () => {
    dispatch(bookActions.removeBook(book.id));
  };

  return (
    <>
      <li onClick={onRemoveBookHandler}>{book.title}</li>
    </>
  );
};

export default BookItem;
