import React from "react";
import GigDetail from "./GigDetail";
import GigListSection from "./GigListSection";
import { Container } from "./Stylesheet";

function GigList() {
  return (
    <Container>
      <GigListSection />
      <GigDetail />
    </Container>
  );
}

export default GigList;
