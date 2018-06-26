import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import ExhangeButton from "../ExhangeButton/ExchangeButton";
import AmountField from "../AmountField/AmountField";
import CurrencyList from "../CurrencyList/CurrencyList";
import DropDown from "../DropDown/DropDown";
import Container from "../Layout/Container";
import Content from "../Layout/Content";
import Footer from "../Layout/Footer";

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <DropDown />
        </Header>

        <Content>
          <AmountField />
          <CurrencyList />
        </Content>

        <Footer>
          <ExhangeButton />
        </Footer>
      </Container>
    );
  }
}

export default App;
