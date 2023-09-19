import React from "react";
import About from "./About";
import ImageDetail from "./ImageDetail";
import Price from "./Price";
import Trip from "./Trip";
import AnotherTour from "./AnotherTour";
import { useParams } from "react-router-dom";
export default function Details() {
  const {id}=useParams();
  
  return (
    <div>
      <About matour={id} />
      <Price matour={id} />
      <ImageDetail />
      <Trip />
      <AnotherTour />
    </div>
  );
}
