import React, { Component } from "react";
import "../css/Form.css";
import Button from "@material-ui/core/Button";

class Form extends Component {
  render() {
    return (
      <div className="form">
        <form onSubmit={this.props.handleSubmit}>
          <select className="hide" name="title">
            <option className="none" value="">
              作成者を選択
            </option>
            <option value="田中">田中</option>
            <option value="髙橋">髙橋</option>
            <option value="及川">及川</option>
            <option value="桜井">桜井</option>
          </select>
          <br />
          <textarea name="desc" placeholder="企業名" />
          <br />
          <select name="industry">
            <option className="none" value="">
              業種を選択
            </option>
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
          <br />
          <textarea name="phone" placeholder="電話番号" />
          <br />
          <textarea name="companyProfile" placeholder="会社概要URL" />
          <br />
          <Button variant="contained" color="primary" type="submit">
            項目を作成
          </Button>
        </form>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.props.handleDelete}
        >
          全項目を削除
        </Button>
      </div>
    );
  }
}
export default Form;
