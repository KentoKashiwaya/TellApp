import React, { Component } from "react";
import "../css/Todo.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    const initialDate = new Date();
    const initialDate2 = new Date();
    this.state = {
      startDate: initialDate,
      startDate2: initialDate2,
    };
  }

  render() {
    const handleChange = (date) => {
      this.setState({ startDate: date });
      const data = localStorage.getItem(this.props.id);
      const JSONdata = JSON.parse(data);
      JSONdata.date1 = date;
      const stringData = JSON.stringify(JSONdata);
      localStorage.setItem(this.props.id, stringData);
      console.log(JSONdata);
    };

    const handleChange2 = (date) => {
      this.setState({ startDate2: date });
      const data = localStorage.getItem(this.props.id);
      const JSONdata = JSON.parse(data);
      JSONdata.date2 = date;
      const stringData = JSON.stringify(JSONdata);
      localStorage.setItem(this.props.id, stringData);
      console.log(JSONdata);
    };
    const className = "OneTodo";
    const firstDate = localStorage.getItem(this.props.id);
    const firstDate1 = JSON.parse(firstDate);
    const iniDate1 = firstDate1.date1;
    const iniDate2 = firstDate1.date2;
    const parsedDate1 = Date.parse(iniDate1);
    const parsedDate2 = Date.parse(iniDate2);

    return (
      <li className={className}>
        <form onChange={this.props.update} autocomplete="off">
          <textarea className="shortBox noPointer id" name="countTodo">
            {this.props.id}       
          </textarea>
          <select className="shortBox" name="newTitle">
            <option>{this.props.title}</option>
            <option value="田中">田中</option>
            <option value="髙橋">髙橋</option>
            <option value="及川">及川</option>
            <option value="桜井">桜井</option>
          </select>
          <select className="shortBox choice" name="newCharger">
            <option>{this.props.charger}</option>
            <option value="田中">田中</option>
            <option value="髙橋">髙橋</option>
            <option value="及川">及川</option>
            <option value="桜井">桜井</option>
          </select>
          <DatePicker
            name="newDate1"
            value={this.state.startDate}
            className="shortBox"
            selected={parsedDate1}
            onChange={handleChange}
            portalId={this.state.startDate}
          />
          <DatePicker
            name="newDate2"
            value={this.state.startDate2}
            className="shortBox"
            selected={parsedDate2}
            onChange={handleChange2}
            portalId={this.state.startDate2}
          />
          <textarea className="longBox" name="newDesc">
            {this.props.desc}
          </textarea>
          <select className="shortBox choice" name="newIndustry">
            <option>{this.props.industry}</option>
            <option value="イベント">イベント</option>
            <option value="飲食">飲食</option>
            <option value="受付">受付</option>
            <option value="教育">教育</option>
            <option value="軽作業">軽作業</option>
            <option value="警備">警備</option>
            <option value="清掃">清掃</option>
            <option value="ドライバー">ドライバー</option>
            <option value="販売">販売</option>
          </select>
          <textarea className="longBox" name="newPhone">
            {this.props.phone}
          </textarea>
          <textarea className="longBox" name="newCompanyProfile">
              {this.props.companyProfile}
          </textarea>
          <select className="longBox choice" name="newStatus">
            <option>{this.props.status}</option>
            <option value="コール音">コール音</option>
            <option value="担当不在">担当不在</option>
            <option value="受付NG">受付NG</option>
            <option value="担当NG">担当NG</option>
            <option value="資料送付">資料送付</option>
            <option value="アポ取得">アポ取得</option>
            <option value="荷電NG">荷電NG</option>
          </select>
        </form>
      </li>
    );
  }
}

export default Todo;
