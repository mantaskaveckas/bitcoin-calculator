import React, { Component } from "react";
import "./App.css";
import arrowIcon from "../../assets/arrow.svg";
import deleteIcon from "../../assets/delete.svg";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <div className="col-6 col-sm-12">
            <h1 className="header-title">Bitcoin Exchange</h1>
          </div>
          <div className="col-6 col-sm-12">
            <div className="dropdown">
              <span className="dropdown-button">
                <span>Add Currency</span>
                <img className="dropdown-button-arrow" src={arrowIcon} />
              </span>
            </div>
          </div>
        </header>
        <main className="content">
          <div className="col-6 col-sm-12">
            <div className="content-row border-bottom">
              <h2 className="content-row-title title-large">
                BTC
                <small className="content-row-subtitle">$6,288.03</small>
              </h2>
            </div>
            <input
              className="content-row input"
              placeholder="Enter Bitcoin Amount"
            />
          </div>
          <div className="col-6 col-sm-12 content-col-gray">
            <div className="content-row border-bottom">
              <h3 className="content-row-title title-small">USD</h3>
              <div className="content-row-info">
                <span className="content-row-amount">$6,281.63</span>
                <img className="content-row-delete" src={deleteIcon} />
              </div>
            </div>
            <div className="content-row border-bottom">
              <h3 className="content-row-title title-small">EUR</h3>
              <div className="content-row-info">
                <span className="content-row-amount">$6,281.63</span>
                <img className="content-row-delete" src={deleteIcon} />
              </div>
            </div>
            <div className="content-row">
              <h3 className="content-row-title title-small">GBP</h3>
              <div className="content-row-info">
                <span className="content-row-amount">$6,281.63</span>
                <img className="content-row-delete" src={deleteIcon} />
              </div>
            </div>
          </div>
        </main>
        <footer className="footer">
          <button className="footer-button">Exchange</button>
        </footer>
      </div>
    );
  }
}

export default App;
