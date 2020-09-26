// import React, { Component } from 'react';
// import { ComposedChart, XAxis, YAxis, Tooltip, CartesianGrid, Bar, Label, PieChart, Pie, LabelList, Legend, Area, Line } from 'recharts';
// import '../css/Chart.css';

// class Chart extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     const AllData = [];
//     const industryA =[];

//     let appoLength = 0;
//     let industryALength = 0;

//     const todos = this.props.todos.map(todo => {
//         const todoItem = {...todo};
//         AllData.push(todoItem);
//     });

//     const idList = AllData.map(obj => obj.id);
//     // const industryList = AllData.map(obj => obj.industry);
//     // console.log(AllData);

//     if(AllData.map(obj => obj.industry === "イベント")){
//       industryALength++;
//     }

//     if(AllData.map(obj => obj.status === "アポ取得")){
//        appoLength++;
//     };
    

//     const ChartData = [
//       {
//         "name": "全体",
//         "リスト数": idList.length,
//         "アポ取得数": appoLength,
//         "アポ取得率": appoLength / idList.length,
//       },
//       {
//         "name": "イベント",
//         "リスト数": industryALength,
//         "担当接続率": this.props.connectionRate,
//         "アポ取得率": this.props.appointmentRate
//       },
//     ]
//     return (
//       <div className="chart">
//         <ComposedChart width={730} height={250} data={ChartData}>
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <CartesianGrid stroke="#f5f5f5" />
//           <Bar dataKey="リスト数" barSize={20} fill="#413ea0" />
//           <Line type="monotone" dataKey="アポ取得数" stroke="#ff7300" />
//           <Line type="monotone" dataKey="アポ取得率" stroke="#8884d8" />
//         </ComposedChart>
//       </div>
//     )
//   }
// }
// export default Chart;