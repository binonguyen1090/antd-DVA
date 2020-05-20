import React from "react";
import List from "antd/es/list";
import Input from "antd/es/input";
import TodoItem from "./Todo-item";
import styles from "./Todo.css";

// const Todo = () => {
export default class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      events:[]
    };
  }
  handlePressEnter = (e) => {
    const todo = {
      index: this.state.todos.length,
      content: e.target.value,
    };

    const newTodos = this.state.todos.concat(todo);

    this.setState({
      todos: newTodos,
    });

    e.target.value = "";
  };

  removeTodo = (index) => {
    let newTodos = [...this.state.todos];

    newTodos.splice(index, 1);

    for (let i = index; i < newTodos.length; i++) {
      newTodos[i].index -= 1;
    }

    this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <div className={styles.normal}>
        <Input
          placeholder="Create target"
          onPressEnter={this.handlePressEnter}
        />
        <Input
          placeholder="Create event"
          onPressEnter={this.handlePressEnter}
        />
        <List
          ocale={{ emptyText: "No todo items" }}
          dataSource={this.state.todos}
          renderItem={(item) => (
            <TodoItem
              content={item.content}
              index={item.index}
              removeTodo={this.removeTodo}
            />
          )}
        />
      </div>
    );
  }
}
