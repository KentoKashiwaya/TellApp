import React, { Component } from "react";
import Todo from "./Todo";
import "../css/Todolist.css";

class TodoList extends Component {
  render() {
    const todos = this.props.todos.map((todo) => (
      <Todo
        key={todo.id}
        {...todo}
        setTodoStatus={this.props.setTodoStatus}
        selected={this.props.startDate}
        update={this.props.updateLocalStrage}
      />
    ));

    return (
      <ul>
        <div className="header">
          <textarea className="shortBox"></textarea>
          <textarea className="shortBox" name="newTitle">
            作成者
          </textarea>
          <textarea className="shortBox">荷電者</textarea>
          <textarea className="shortBox">TEL日1</textarea>
          <textarea className="shortBox">TEL日2</textarea>
          <textarea className="longBox header" name="newDesc">
            会社名
          </textarea>
          <textarea className="shortBox" name="newIndustry">
            業種
          </textarea>
          <textarea className="longBox header" name="newPhone">
            電話番号
          </textarea>
          <textarea className="longBox header" name="newCompanyProfile">
            会社概要
          </textarea>
          <textarea className="longBox header" name="">
            TEL結果
          </textarea>
        </div>
        {todos}
      </ul>
    );
  }
}
export default TodoList;
