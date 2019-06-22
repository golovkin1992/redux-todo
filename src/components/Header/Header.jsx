import React from 'react';
import SelectAllTodo from './SelectAllTodo';
import NewItemTodo from './NewItemTodo';

const Header = ({ selectAllTodos, addTodo }) => (
  <>
    <SelectAllTodo selectAllTodos={selectAllTodos} />
    <NewItemTodo addTodo={addTodo} />
  </>
);
export default Header;
