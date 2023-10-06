import React, { useLayoutEffect } from "react";
import FlashSale from "./FlashSale";
import Location from "./Location";
import Sort from "./Sort";
import Tours from "./Tours";
import Endow from "./Endow";

export default function More() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Location />
      <Sort />
      <Tours />
      <Endow />
    </div>
  );
}
