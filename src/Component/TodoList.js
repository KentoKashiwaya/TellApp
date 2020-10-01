import React, { Component } from "react";
import Todo from "./Todo";
import "../css/Todolist.css";

class TodoList extends Component {
  render() {
    const todos = this.props.todos.map((todo) => (
      <Todo
        key={todo.id}
        {...todo}
        selected={this.props.startDate}
        update={this.props.updateLocalStrage}
      />
    ));

    return (
      <ul>
        <div className="header">
          <textarea className="shortBox bgcBlue"></textarea>
          <select className="shortBox headselect bgcBlue" name="newTitle">
          <option value="作成者">作成者</option>
          </select>
          <select className="shortBox headselect bgcBlue">
            <option value="架電者">架電者</option>
          </select>
          <textarea className="shortBox bgcBlue">TEL日1</textarea>
          <textarea className="shortBox bgcBlue">TEL日2</textarea>
          <textarea className="longBox bgcBlue" name="newDesc">
            会社名
          </textarea>
          <textarea className="shortBox bgcBlue" name="newIndustry">
            業種
          </textarea>
          <textarea className="longBox bgcBlue" name="newPhone">
            電話番号
          </textarea>
          <textarea className="longBox bgcBlue" name="newCompanyProfile">
            会社概要
          </textarea>
          <textarea className="longBox bgcBlue" name="">
            TEL結果
          </textarea>
        </div>
        {todos}
      </ul>
    );
  }
}
export default TodoList;
