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
/* / state = {
    arrayTodo: JSON.parse(localStorage.getItem('todo')) || [],
    filter: localStorage.getItem('filter') || 'all',
  };

  componentDidUpdate() {
    this.saveToStorage();
  }

  handleAddElement = (obj) => {
    const { arrayTodo } = this.state;
    this.setState({
      arrayTodo: [...arrayTodo, obj],
    });
  };


  handleEditElement = (id, text) => {
    const { arrayTodo } = this.state;
    this.setState({
      arrayTodo: arrayTodo.map(el => (el.id === id ? { ...el, text } : el)),
    });
  };

  /* /handleRemoveElement = (id) => {
    const { arrayTodo } = this.state;
    const removeIndex = arrayTodo.findIndex(el => el.id === id);
    this.setState({
      arrayTodo: [
        ...arrayTodo.slice(0, removeIndex),
        ...arrayTodo.slice(removeIndex + 1),
      ],
    });
  };

  handleToggleElement = (id, isComplete) => {
    const { arrayTodo } = this.state;
    const changeIndex = arrayTodo.findIndex(el => el.id === id);
    const updatedObj = Object.assign({}, arrayTodo[changeIndex], { isComplete: !isComplete });
    this.setState({
      arrayTodo: [
        ...arrayTodo.slice(0, changeIndex),
        updatedObj,
        ...arrayTodo.slice(changeIndex + 1),
      ],
    });
  };

  saveToStorage = () => {
    const { arrayTodo } = this.state;
    const str = JSON.stringify(arrayTodo);
    localStorage.setItem('todo', str);
  };

  handleChangeFilter = (filterName) => {
    this.setState({ filter: filterName });
    localStorage.setItem('filter', filterName);
  };

  getFilter = (filterName) => {
    const { arrayTodo } = this.state;
    switch (filterName) {
      case 'all':
        return arrayTodo;
      case 'completed':
        return arrayTodo.filter(item => item.isComplete);
      case 'active':
        return arrayTodo.filter(item => !item.isComplete);
      default:
        return arrayTodo;
    }
  };

  handleClearCompletedClick = () => {
    const { arrayTodo } = this.state;
    this.setState({
      arrayTodo: arrayTodo.filter(item => !item.isComplete),
    });
  };

  handleToggleAllClick = (e) => {
    const { arrayTodo } = this.state;
    this.setState({
      arrayTodo: arrayTodo.map(el => ({
        ...el,
        isComplete: e.target.checked,
      })),
    });
  };
/ */

//  const { arrayTodo, filter } = this.state;
// const total = arrayTodo.length;
// const active = arrayTodo.filter(item => !item.isComplete).length;
// const completed = arrayTodo.filter(item => item.isComplete).length;
// const filterItems = this.getFilter(filter);
