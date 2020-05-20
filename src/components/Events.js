import React from "react";
import List from "antd/es/list";
import Input from "antd/es/input";
import EventItem from "./Event-item";
import styles from "./Events.css";

// const Todo = () => {
export default class Event extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }
  handlePressEnter = (e) => {
    const todo = {
      index: this.state.events.length,
      content: e.target.value,
    };

    const newevents = this.state.events.concat(todo);

    this.setState({
      events: newevents,
    });

    e.target.value = "";
  };

  removeTodo = (index) => {
    let newevents = [...this.state.events];

    newevents.splice(index, 1);

    for (let i = index; i < newevents.length; i++) {
      newevents[i].index -= 1;
    }

    this.setState({
      events: newevents,
    });
  };

  render() {
    return (
      <div className={styles.normal}>
        <Input
          placeholder="Create Event"
          onPressEnter={this.handlePressEnter}
        />

        <List
          ocale={{ emptyText: "No todo items" }}
          dataSource={this.state.events}
          renderItem={(item) => (
            <EventItem
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
