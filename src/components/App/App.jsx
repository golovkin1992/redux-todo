import React, { Fragment } from 'react';
import HeaderContainer from '../Header';
import FooterContainer from '../Footer';
import './App.css';
import TodoListContainer from '../TodoList/TodoListContainer';

const App = () => (
  <Fragment>
    <HeaderContainer />
    <TodoListContainer />
    <FooterContainer />
  </Fragment>
);
export default App;
