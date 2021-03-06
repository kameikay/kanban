import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <div className="logo">
        My<span>Kanban</span>App
      </div>
      <div className="username">
        Olá, <span>Victor</span>!
      </div>
    </Container>
  );
}
