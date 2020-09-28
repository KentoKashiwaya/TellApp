import React, { Component } from "react";
import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Bar,
  Label,
  PieChart,
  Pie,
  LabelList,
  FunnelChart,
  Funnel,
} from "recharts";
import "../css/Trend.css";
import Aside from "./Aside";
import IndustryChart from "./IndustryChart";

class Trend extends Component {
  constructor() {
    super();
    let all = [];
    let id = [];
    let author = [];
    let charger = [];
    let industry = [];
    let status = [];

    let appointment = [];
    let sendMail = [];
    let ng = [];
    let appointmentLength = 0;
    let sendMailLength = 0;
    let ngLength = 0;

    let industry_A = [];
    let industry_B = [];
    let industry_C = [];
    let industry_D = [];
    let industry_E = [];
    let industry_F = [];
    let industry_G = [];
    let industry_H = [];
    let industry_I = [];

    let industry_A_Length = 0;
    let industry_B_Length = 0;
    let industry_C_Length = 0;
    let industry_D_Length = 0;
    let industry_E_Length = 0;
    let industry_F_Length = 0;
    let industry_G_Length = 0;
    let industry_H_Length = 0;
    let industry_I_Length = 0;

    let industry_A_AppointmentLength = 0;
    let industry_B_AppointmentLength = 0;
    let industry_C_AppointmentLength = 0;
    let industry_D_AppointmentLength = 0;
    let industry_E_AppointmentLength = 0;
    let industry_F_AppointmentLength = 0;
    let industry_G_AppointmentLength = 0;
    let industry_H_AppointmentLength = 0;
    let industry_I_AppointmentLength = 0;

    //localstrageからデータをローディング
    for (let i = 1; i < localStorage.length + 1; i++) {
      const prevTodos = localStorage.getItem(i);
      const loadedData = JSON.parse(prevTodos);
      const idData = loadedData.id;
      const authorData = loadedData.title;
      const chargerData = loadedData.charger;
      const industryData = loadedData.industry;
      const statusData = loadedData.status;

      //ロードした各項目が指定の状態・業種にマッチしているか判定
      const appointmentData = statusData === "アポ取得";
      const sendMailData = statusData === "資料送付";
      const ngData = statusData === "担当NG";
      const industry_A_Data = industryData === "イベント";
      const industry_B_Data = industryData === "飲食";
      const industry_C_Data = industryData === "受付";
      const industry_D_Data = industryData === "教育";
      const industry_E_Data = industryData === "軽作業";
      const industry_F_Data = industryData === "警備";
      const industry_G_Data = industryData === "清掃";
      const industry_H_Data = industryData === "ドライバー";
      const industry_I_Data = industryData === "販売";

      //ロードしたデータを項目ごとに配列に追加
      all.push(loadedData);
      id.push(idData);
      author.push(authorData);
      charger.push(chargerData);
      industry.push(industryData);
      status.push(statusData);

      appointment.push(appointmentData);
      sendMail.push(sendMailData);
      ng.push(ngData);

      industry_A.push(industry_A_Data);
      industry_B.push(industry_B_Data);
      industry_C.push(industry_C_Data);
      industry_D.push(industry_D_Data);
      industry_E.push(industry_E_Data);
      industry_F.push(industry_F_Data);
      industry_G.push(industry_G_Data);
      industry_H.push(industry_H_Data);
      industry_I.push(industry_I_Data);

      //ステータス・業種ごとに条件に一致する要素数をカウント
      if (appointmentData === true) {
        appointmentLength++;
      }
      if (sendMailData === true) {
        sendMailLength++;
      }
      if (ngData === true) {
        ngLength++;
      }
      if (industry_A_Data === true) {
        industry_A_Length++;
      }
      if (industry_B_Data === true) {
        industry_B_Length++;
      }
      if (industry_C_Data === true) {
        industry_C_Length++;
      }
      if (industry_D_Data === true) {
        industry_D_Length++;
      }
      if (industry_E_Data === true) {
        industry_E_Length++;
      }
      if (industry_F_Data === true) {
        industry_F_Length++;
      }
      if (industry_G_Data === true) {
        industry_G_Length++;
      }
      if (industry_H_Data === true) {
        industry_H_Length++;
      }
      if (industry_I_Data === true) {
        industry_I_Length++;
      }
    }
    this.state = {
      all: all,
      id: id,
      author: author,
      charger: charger,
      industry: industry,
      status: status,

      appointmentLength: appointmentLength,
      sendMailLength: sendMailLength,
      ngLength: ngLength,

      industry_A_Length: industry_A_Length,
      industry_B_Length: industry_B_Length,
      industry_C_Length: industry_C_Length,
      industry_D_Length: industry_D_Length,
      industry_E_Length: industry_E_Length,
      industry_F_Length: industry_F_Length,
      industry_G_Length: industry_G_Length,
      industry_H_Length: industry_H_Length,
      industry_I_Length: industry_I_Length,
    };
  }
  render() {
    const appointmentRate =
      (this.state.appointmentLength / this.state.id.length) * 100;
    const sendMailRate =
      (this.state.sendMailLength / this.state.id.length) * 100;
    const ngRate = (this.state.ngLength / this.state.id.length) * 100;
    const connectionRate =
      ((this.state.appointmentLength +
        this.state.sendMailLength +
        this.state.ngLength) /
        this.state.id.length) *
      100;
    const industry_ALL_Length = [
      {
        name: "イベント",
        value: this.state.industry_A_Length,
        fill: "#93FFAB"
      },
      {
        name: "飲食",
        value: this.state.industry_B_Length,
        fill: "#86F9C5"
      },
      {
        name: "受付",
        value: this.state.industry_C_Length,
        fill: "#E4FF8D"
      },
      {
        name: "教育",
        value: this.state.industry_D_Length,
        fill: "#8EF1FF"
      },
      {
        name: "軽作業",
        value: this.state.industry_E_Length,
        fill: "#8EB8FF"
      },
      {
        name: "警備",
        value: this.state.industry_F_Length,
        fill: "#C299FF"
      },
      {
        name: "清掃",
        value: this.state.industry_G_Length,
        fill: "#FF97C2"
      },
      {
        name: "ドライバー",
        value: this.state.industry_H_Length,
        fill: "#FF9872"
      },
    ];
    const notationRate = (rate) => {
      return Math.floor(rate * 100) / 100;
    };
    return (
      <div className="App Trend">
        <Aside />
        <div className="upper">
          {/* <PieChart width={330} height={270} className="pie">
            <Pie
              data={industry_ALL_Length}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#003366"
              label="true"
              labelLine={false}
            >
              <LabelList dataKey="name" />
            </Pie>
            <Tooltip/>
          </PieChart> */}
          <div className="IndustryChart box">
            <IndustryChart
              appointmentRate={appointmentRate}
              all={this.state.all}
              charger={this.state.charger}
              industry={this.state.industry}
              status={this.state.status}
              appointmentData={this.appointmentData}
              appointmentLength={this.state.appointmentLength}
              industry_A_Length={this.state.industry_A_Length}
              industry_B_Length={this.state.industry_B_Length}
              industry_C_Length={this.state.industry_C_Length}
              industry_D_Length={this.state.industry_D_Length}
              industry_E_Length={this.state.industry_E_Length}
              industry_F_Length={this.state.industry_F_Length}
              industry_G_Length={this.state.industry_G_Length}
              industry_H_Length={this.state.industry_H_Length}
              industry_I_Length={this.state.industry_I_Length}
            />
          </div>
          <FunnelChart width={400} height={250} className="FunnelChart box">
            <Tooltip />
            <Funnel dataKey="value" data={industry_ALL_Length} isAnimationActive>
              <LabelList
                position="inside"
                fill="#000"
                stroke="none"
                dataKey="name"
              />
            </Funnel>
          </FunnelChart>
        </div>
        <div>【全体】</div>
        <div>アポ取得率{notationRate(appointmentRate)}%</div>
        <div>資料送付率{notationRate(sendMailRate)}%</div>
        <div>担当NG率{notationRate(ngRate)}%</div>
        <div>担当接続率{notationRate(connectionRate)}%</div>

        <div>【業種】</div>
        <div>イベントへの荷電数{this.state.industry_A_Length}件</div>
        <div>飲食への荷電数{this.state.industry_B_Length}件</div>
        <div>受付への荷電数{this.state.industry_C_Length}件</div>
        <div>教育への荷電数{this.state.industry_D_Length}件</div>
        <div>軽作業への荷電数{this.state.industry_E_Length}件</div>
        <div>警備への荷電数{this.state.industry_F_Length}件</div>
        <div>清掃への荷電数{this.state.industry_G_Length}件</div>
        <div>ドライバーへの荷電数{this.state.industry_H_Length}件</div>
        <div>販売への荷電数{this.state.industry_I_Length}件</div>
      </div>
    );
  }
}
export default Trend;
