import React from 'react';
import HeaderContainer from '../Header';
import FooterContainer from '../Footer';
import './App.css';
import TodoListContainer from '../TodoList/TodoListContainer';

const App = () => (
  <React.Fragment>
    <HeaderContainer />
    <TodoListContainer />
    <FooterContainer />
  </React.Fragment>
);
export default App;
