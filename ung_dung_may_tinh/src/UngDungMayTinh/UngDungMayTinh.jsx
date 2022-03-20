import React, { Component } from "react";
import "./UngDungMayTinh.css";

export default class UngDungMayTinh extends Component {
  state = {
    calculation: "",
    result: "0",
  };
  numInput = (e) => {  
    let val = this.state.result;
    if (val === "0") {
      val = "";
    }
    if (val.length < 12) {
      val += e.currentTarget.value;
      this.setState({
        result: val,
      });
    }
  };
  operInput = (e) => {
    let val = this.state.calculation;
      if (val !== "") {
        val += this.state.result + e.currentTarget.value;
      } else {
        val = this.state.result + e.currentTarget.value;
    }
    this.setState({
      calculation: val,
      result: "0",
    });
  };
  calculate = () => {
    // eslint-disable-next-line no-eval
    let res = eval(this.state.calculation + this.state.result);
    res = res.toString();
    if (res.length > 12) {
      res = Number(res).toExponential(10);
      res = res.toString();   
    }
    this.setState(
      {
        result: res,
        calculation: "",
      }
    );
  };
  percentInput = () => {
    let val = this.state.result / 100;
    val = val.toString();
    if (val.length > 12) {
      val = Number(val).toExponential(10);
      val = val.toString();
    }
    this.setState({
      result: val,
    });
  };
  clearAll = () => {
    this.setState({
      calculation: "",
      result: "0",
    });
  };
  clearInput = () => {   
    let res = this.state.result.substring(0, this.state.result.length - 1);
    if (res.length === 0) {
      this.setState({
        result: "0",
      });
    } else {
      this.setState({
        result: res,
      });
    }
  };
  toLocalStr = (num) => {
    if (num.length <= 12) {
      if (num.includes(".")) {
        let index = num.indexOf(".");
        let beforeDec = "";
        let afterDec = "";
        for (let i = 0; i < num.length; i++) {
          if (i < index) {
            beforeDec += num[i];
          } else if (i > index) {
            afterDec += num[i];           
          }
        }
        return Number(beforeDec).toLocaleString()  +"."+ afterDec;
      }
      let n = Number(num);
      return n.toLocaleString();
    }
    return num;
  };
  decInput = (e) => {
    let val = this.state.result;
    if (!val.includes(".")) {
      val += e.currentTarget.value;
      this.setState({
        result: val,
      });
    }
  };

  render() {
    return (
      <div>
        <header className="container-fluid text-center text-white py-2">
          <h1>Ứng Dụng máy tính</h1>
        </header>
        <div className="calculator">
          <div id="display">
            <p id="calculation">{this.state.calculation}</p>
            <p id="result">{this.toLocalStr(this.state.result)}</p>
          </div>
          <div className="keyboard">
            <button className="operation" value="C" onClick={this.clearAll}>
              C
            </button>
            <button className="operation" value="CE" onClick={this.clearInput}>
              CE
            </button>
            <button
              className="operation"
              value="%"
              onClick={() => {
                this.percentInput();
              }}
            >
              %
            </button>
            <button
              style={{ backgroundColor: "#ffe082", fontSize: "1.5rem" }}
              className="operation"
              value="/"
              onClick={this.operInput}
            >
              ÷
            </button>

            <button className="number" value="7" onClick={this.numInput}>
              7
            </button>
            <button className="number" value="8" onClick={this.numInput}>
              8
            </button>
            <button className="number" value="9" onClick={this.numInput}>
              9
            </button>
            <button
              style={{ backgroundColor: "#80deea", fontSize: "1.5rem" }}
              className="operation"
              value="*"
              onClick={this.operInput}
            >
              x
            </button>

            <button className="number" value="4" onClick={this.numInput}>
              4
            </button>
            <button className="number" value="5" onClick={this.numInput}>
              5
            </button>
            <button className="number" value="6" onClick={this.numInput}>
              6
            </button>
            <button
              style={{ backgroundColor: "#f08080", fontSize: "1.5rem" }}
              className="operation"
              value="-"
              onClick={this.operInput}
            >
              -
            </button>

            <button className="number" value="1" onClick={this.numInput}>
              1
            </button>
            <button className="number" value="2" onClick={this.numInput}>
              2
            </button>
            <button className="number" value="3" onClick={this.numInput}>
              3
            </button>
            <button
              style={{ backgroundColor: "#7d93e0", fontSize: "1.5rem" }}
              className="operation"
              value="+"
              onClick={this.operInput}
            >
              +
            </button>

            <button className="operation" value="." onClick={this.decInput}>
              .
            </button>
            <button className="number" value="0" onClick={this.numInput}>
              0
            </button>
            <button
              style={{ backgroundColor: "#ff4081", fontSize: "1.2rem" }}
              className="operation"
              value="="
              onClick={this.calculate}
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}
