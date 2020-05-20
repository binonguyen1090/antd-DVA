import React from "react";
import { ScissorOutlined } from "@ant-design/icons";
import List from "antd/es/list";
import styles from "./Todo-item.css";


export default class TodoItem extends React.Component {
  remove = () => {
    this.props.removeTodo(this.props.index);
  };

  render() {
    return (
      <div
        className={styles.normal}
        actions={[<ScissorOutlined onClick={this.remove} />]}
      >
        {this.props.content}
        
      </div>
    );
  }
}
