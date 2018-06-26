import React from "react";
import CurrencyListItem from "./CurrencyListItem";

export default () => (
  <div className="col-6 col-sm-12 content-col-gray">
    <CurrencyListItem name="USD" amount="$6,281.63" withBorder />
    <CurrencyListItem name="USD" amount="$6,281.63" withBorder />
    <CurrencyListItem name="USD" amount="$6,281.63" />
  </div>
);
