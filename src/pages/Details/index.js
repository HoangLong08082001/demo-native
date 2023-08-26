import React from "react";
import About from "./About";
import ImageDetail from "./ImageDetail";
import Price from "./Price";
import Trip from "./Trip";
import AnotherTour from "./AnotherTour";

export default function Details() {
  return (
    <div>
      <About />
      <Price />
      <ImageDetail />
      <Trip />
      <AnotherTour />
    </div>
  );
}
