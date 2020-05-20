import React from "react";
import { ScissorOutlined } from "@ant-design/icons";
import List from "antd/es/list";
import styles from "./Todo-item.css";
import Modal from "antd/es/modal";
import Button from "antd/es/button";
import Todo from "../components/Todo"

export default class EventItem extends React.Component {
  constructor() {
    super();
    this.state = { visible: false };
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  remove = () => {
    this.props.removeTodo(this.props.index);
  };

  onModal = () => {
    Modal.info({
      title: "JavaScript",
      content: <div>{this.props.content}</div>,
    });
  };

  render() {
    return (
      <div
        className={styles.normal}
        actions={[<ScissorOutlined onClick={this.remove} />]}
      >
        {this.props.content}
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="JavaScript"
          visible={this.state.visible}
          onCancel={this.handleCancel}
        >
          {this.props.content}
          
        </Modal>
      </div>
    );
  }
}
