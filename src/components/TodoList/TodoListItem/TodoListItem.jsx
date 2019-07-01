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

  handleInputChange = () => {
    const {
      id,
      toggleTodo,
    } = this.props;
    toggleTodo(id);
  };

  handleBtnDeleteClick = () => {
    const {
      id,
      removeTodo,
    } = this.props;
    removeTodo(id);
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
      editTodo,
      removeTodo,
    } = this.props;
    let { text } = this.props;
    if (!e.keyCode || e.keyCode === 13) {
      if (e.target.value !== '') {
        text = e.target.value;
        editTodo(id, text);
        this.setState({ isEdit: false });
      } else {
        removeTodo(id);
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
            className="complete"
            type="checkbox"
            checked={isComplete}
            onChange={this.handleInputChange}
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
            className="delete"
            type="submit"
            onClick={this.handleBtnDeleteClick}
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
  removeTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};
