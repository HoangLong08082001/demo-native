import React from "react";
import FlashSale from "./FlashSale";
import Location from "./Location";
import Sort from "./Sort";
import Tours from "./Tours";
import Endow from "./Endow";

export default function More() {
  return (
    <div>
      <Location />
      <Sort />
      <Tours />
      <Endow />
    </div>
  );
}
