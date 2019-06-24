import React from 'react';
import HeaderContainer from '../Header';
import FooterContainer from '../Footer';
import './App.css';
import TodoListContainer from '../TodoList/TodoListContainer';

const App = () => (
  <>
    <HeaderContainer />
    <TodoListContainer />
    <FooterContainer />
  </>
);
export default App;
