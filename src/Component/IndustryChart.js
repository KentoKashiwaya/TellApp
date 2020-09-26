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
  Legend,
  Area,
  Line,
} from "recharts";
import "../css/Trend.css";

class IndustryChart extends Component {
  constructor(props) {
    super(props);
    let industry_A_appointmentlength = 0;
    this.props.all.map((item) => {
      if (item.industry === "イベント" && item.status === "アポ取得") {
        industry_A_appointmentlength++;
      }
    });
    console.log(industry_A_appointmentlength);
  }
  render() {
    const data = [
      {
        name: "全体",
        リスト数: this.props.charger.length,
        アポ取得数: this.props.appointmentLength,
        担当接続率: this.props.connectionRate,
        アポ取得率: this.props.appointmentRate,
      },
      {
        name: "イベント",
        リスト数: this.props.industry_A_Length,
        アポ取得数: this.industry_A_AppointmentLength,
        // "アポ取得率": industry_A_appointmentRate
      },
    ];
    return (
      <div>
        <ComposedChart width={730} height={250} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Bar dataKey="リスト数" barSize={20} fill="#413ea0" />
          <Bar dataKey="アポ取得数" barSize={20} fill="#ff4500" />
          <Line type="monotone" dataKey="アポ取得率" stroke="#ff7300" />
          <Line type="monotone" dataKey="担当接続率" stroke="#8884d8" />
        </ComposedChart>
      </div>
    );
  }
}
export default IndustryChart;
