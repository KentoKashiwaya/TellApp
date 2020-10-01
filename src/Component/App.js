import React, { Component } from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import Aside from "./Aside";
import "../css/App.css";

class App extends Component {
  constructor() {
    super();
    const todos = [];
    const countTodo = todos.length;
    for (let i = 1; i < localStorage.length + 1; i++) {
      let prevTodos = JSON.parse(localStorage.getItem(i));
      todos.push(prevTodos);
    }
    this.state = {
      todos: todos,
      countTodo: todos.length + 1,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const date1 = "";
    const date2 = "";
    const desc = e.target.desc.value;
    const industry = e.target.industry.value;
    const phone = e.target.phone.value;
    const companyProfile = e.target.companyProfile.value;
    const todos = this.state.todos.slice();
    const countTodo = this.state.countTodo;

    todos.push({
      id: countTodo,
      title: title,
      date1: date1,
      date2: date2,
      desc: desc,
      phone: phone,
      industry: industry,
      companyProfile: companyProfile,
      done: false,
    });

    this.setState({ todos });
    this.setState({ countTodo: countTodo + 1 });

    let obj = {
      id: countTodo,
      title: title,
      date1: date1,
      date2: date2,
      desc: desc,
      phone: phone,
      industry: industry,
      companyProfile: companyProfile,
    };

    let opp = JSON.stringify(obj);
    localStorage.setItem(countTodo, opp);

    e.target.title.value = "";
    e.target.desc.value = "";
    e.target.industry.value = "";
    e.target.phone.value = "";
    e.target.companyProfile.value = "";
  }

  handleDelete() {
    if(window.confirm('全ての項目を削除します。よろしいですか？')){
      for (let i = 1; i < localStorage.length + 100; i++) {
        localStorage.removeItem(i);
      }
      window.location.reload();
    } return;
  }

  //内容に変更が加った際に情報をlocalstorageに保存
  updateLocalStrage(e) {
    e.preventDefault();
    const newTitle = e.currentTarget.newTitle.value;
    const newCharger = e.currentTarget.newCharger.value;
    const newDesc = e.currentTarget.newDesc.value;
    const newIndustry = e.currentTarget.newIndustry.value;
    const newPhone = e.currentTarget.newPhone.value;
    const newCompanyProfile = e.currentTarget.newCompanyProfile.value;
    const newStatus = e.currentTarget.newStatus.value;
    const countTodo = e.currentTarget.countTodo.value;
    const newDate1 = e.currentTarget.newDate1.value;
    const newDate2 = e.currentTarget.newDate2.value;

    let newObj = {
      id: countTodo,
      title: newTitle,
      charger: newCharger,
      desc: newDesc,
      phone: newPhone,
      industry: newIndustry,
      companyProfile: newCompanyProfile,
      status: newStatus,
      date1: newDate1,
      date2: newDate2,
    };
    let newOpp = JSON.stringify(newObj);
    localStorage.setItem(countTodo, newOpp);
    console.log("updated from App.");
  }
  reload = () => window.location.reload();
  render() {
    return (
      <div className="app">
        <Aside />
        <Form
          handleSubmit={this.handleSubmit.bind(this)}
          handleDelete={this.handleDelete.bind(this)}
        />
        <div className="right">
          <TodoList
            todos={this.state.todos}
            updateLocalStrage={this.updateLocalStrage.bind(this)}
          />
        </div>
      </div>
    );
  }
}
export default App;
