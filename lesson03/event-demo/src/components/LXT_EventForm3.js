import React, { Component } from 'react'
//xử lý sự kiện vs props ,state

export default class LXT_EventForm3 extends Component {
    constructor(props){
        super(props);
        //tao doi tuong thong qua state
        this.state={
            name:"Lê Xuân Toàn",
            job:"Sinh Viên"
        }
    }
    handelChangerName=()=>{
        this.state({
            name:"K22CNT2-JS"
        })
    }
    handelChangerJob=()=>{
        this.state({
            job:"student"
        })
    }
  render() {
    return (
      <div className="alert alert-primary">
        <h2>Thay đổi giữ liệu trong state</h2>
        <p>
          Dữ Liệu:{this.state.name} - {this.stat.job}
        </p>
        <button onClick={this.handelChangerName}>Thay Đổi Name;</button>
        <button onClick={this.handelChangerJob}>Thay Đổi JOB;</button>
      </div>
    );
  }
}
