import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Modal from "./Modal";

const App = () => {
  const [comment, setComment] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const getIsOPen = () => {
    setIsOpen(true);
  };
  return (
    <BigBox>
      <SmallBox>
        게시판
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          체크 리스트
        </button>
        <button />
        {isOpen ? <Modal setIsOpen={setIsOpen} /> : null}
      </SmallBox>
      <Toggle />
      {/* <input type="range" value="0" min="0" max="1000" /> */}
      <SmallListBox>123213</SmallListBox>
    </BigBox>
  );
};

export default App;

const BigBox = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid black;
`;

const SmallBox = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid black;
  text-align: center;
  font-size: 80px;
  font-weight: bold;
`;

const Toggle = styled.div`
  width: 50px;
  height: 100px;
  border-radius: 10px;
`;

const SmallListBox = styled.div`
  width: 100%;
`;
