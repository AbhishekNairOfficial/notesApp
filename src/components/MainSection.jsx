import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem.jsx';
import Footer from './Footer.jsx';
import { SHOW_ALL, SHOW_MARKED, SHOW_UNMARKED } from '../constants/TodoFilters';
import todoStyle from '../style/todo-style.scss';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_UNMARKED]: todo => !todo.marked,
  [SHOW_MARKED]: todo => todo.marked
};

export default class MainSection extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };
  constructor(props, context) {
    super(props, context);
    this.state = { filter: SHOW_ALL };
  }

  handleClearMarked() {
    const atLeastOneMarked = this.props.todos.some(todo => todo.marked);
    if (atLeastOneMarked) {
      this.props.actions.clearMarked();
    }
  }

  handleShow(filter) {
    this.setState({ filter });
  }

  renderToggleAll(markedCount) {
    const { todos, actions } = this.props;
    if (todos.length > 0) {
      return (
        <input
          className={todoStyle['toggle-all']}
          type="checkbox"
          checked={markedCount === todos.length}
          onChange={actions.markAll}
        />
      );
    }
    return undefined;
  }

  renderFooter(markedCount) {
    const { todos } = this.props;
    const { filter } = this.state;
    const unmarkedCount = todos.length - markedCount;

    if (todos.length) {
      return (
        <Footer
          markedCount={markedCount}
          unmarkedCount={unmarkedCount}
          filter={filter}
          onClearMarked={::this.handleClearMarked}
          onShow={::this.handleShow}
        />
      );
    }
    return undefined;
  }

  render() {
    const { filter } = this.state;
    const { todos, actions } = this.props;

    const filteredTodos = todos.filter(TODO_FILTERS[filter]);
    const markedCount = todos.reduce((count, todo) =>
      (todo.marked ? count + 1 : count),
      0
    );

    return (
      <section className={todoStyle.main}>
        {this.renderToggleAll(markedCount)}
        <ul className={todoStyle['todo-list']}>
          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions} />
          )}
        </ul>
        {this.renderFooter(markedCount)}
      </section>
    );
  }
}
