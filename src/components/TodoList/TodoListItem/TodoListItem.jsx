import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './TodoListItem.css';


export default class TodoListItem extends PureComponent {
  state = { isEdit: false };

  inputFocusRef = React.createRef();

  componentDidUpdate() {
    const { isEdit } = this.state;
    if (isEdit) {
      this.inputFocusRef.current.focus();
    }
  }

  handleInputClick = () => {
    const {
      id,
      isComplete,
      toggleTodoAction,
      saveTodoAction,
    } = this.props;
    toggleTodoAction(id, isComplete);
    saveTodoAction();
  };

  handleBtnDestroyClick = () => {
    const {
      id,
      removeTodoAction,
      saveTodoAction,
    } = this.props;
    removeTodoAction(id);
    saveTodoAction();
  };


  handleLabelDblClick = () => {
    this.setState({ isEdit: true });
  };

  handleKeyDown = (e) => {
    this.handleNewInputEdit(e);
  };

  handleBlur = (e) => {
    this.handleNewInputEdit(e);
  };

  handleNewInputEdit = (e) => {
    const {
      id,
      editTodoAction,
      removeTodoAction,
      saveTodoAction,
    } = this.props;
    let { text } = this.props;
    if (!e.keyCode || e.keyCode === 13) {
      if (e.target.value !== '') {
        text = e.target.value;
        editTodoAction(id, text);
        this.setState({ isEdit: false });
        saveTodoAction();
      } else {
        removeTodoAction(id);
        saveTodoAction();
      }
    }
  };

  render() {
    const { text, isComplete } = this.props;
    const { isEdit } = this.state;
    return (
      <li className="item">
        <div className="content-wrap">
          <input
            onClick={this.handleInputClick}
            onChange={() => {}}
            className="complete"
            type="checkbox"
            checked={isComplete}
          />
          {isEdit ? (
            <input
              className="edit"
              ref={this.inputFocusRef}
              onBlur={this.handleBlur}
              onKeyDown={this.handleKeyDown}
              defaultValue={text}
            />
          ) : (
            <span className="caption" onDoubleClick={this.handleLabelDblClick}>
              {text}
            </span>
          )}
          <button
            className="destroy"
            type="submit"
            onClick={this.handleBtnDestroyClick}
          />
        </div>
      </li>
    );
  }
}
TodoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  removeTodoAction: PropTypes.func.isRequired,
  toggleTodoAction: PropTypes.func.isRequired,
  editTodoAction: PropTypes.func.isRequired,
  saveTodoAction: PropTypes.func.isRequired,
};
